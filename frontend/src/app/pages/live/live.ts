import { Component, computed, effect, inject, signal, WritableSignal } from '@angular/core';
import { FootballApiService } from '../../../services/football-api.service';
import { CommonModule } from '@angular/common';

interface ApiResponse {
  matches: Array<{
    id: number;
    homeTeam: { name: string };
    awayTeam: { name: string };
    score: {
      fullTime: { home: number; away: number };
    };
    status: string;
  }>;
  filters: {
    dateFrom: string;
    dateTo: string;
    permission: string;
  };
  resultSet: {
    count: number
  }
}
@Component({
  selector: 'app-live',
  imports: [CommonModule],
  templateUrl: './live.html',
  styleUrl: './live.css'
})
export class Live {
  private api = inject(FootballApiService);

  private getOneWeekAgoDate(): string {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return oneWeekAgo.toISOString().split('T')[0];
  }

  selectedDate = signal(this.getOneWeekAgoDate());

  private _liveMatches: WritableSignal<ApiResponse | null> = signal(null);
  liveMatchesSignal = computed(() => this._liveMatches());

  constructor() {
    effect(() => {
      const date = this.selectedDate();
      this.fetchMatches(date);
    });
  }

  onDateChange(newDate: string) {
    this.selectedDate.set(newDate);
    this._liveMatches.set(null);
  }

  private fetchMatches(date: string) {
    this._liveMatches.set(null);
    this.api.getLiveMatches(date).subscribe({
      next: (data: ApiResponse) => this._liveMatches.set(data),
      error: (err) => {
        console.error('Error fetching live matches:', err);
        this._liveMatches.set(null);
      }
    });
  }

  liveMatches = computed(() => {
    const data = this.liveMatchesSignal();
    return data?.matches.map((match: any) => ({
      id: match.id,
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name,
      score: `${match.score.fullTime.home} - ${match.score.fullTime.away}`,
      status: match.status,
      time: match.utcDate,
    })) || [];
  });

  previousMatches = computed(() => {
    const data = this.liveMatchesSignal();
    return data?.matches.filter((match: any) => match.status === 'FINISHED')
      .map((match: any) => ({
        id: match.id,
        homeTeam: match.homeTeam.name,
        awayTeam: match.awayTeam.name,
        score: `${match.score.fullTime.home} - ${match.score.fullTime.away}`,
        status: match.status,
        time: match.utcDate,
      })) || [];
  });

  loading = computed(() => this.liveMatchesSignal() === null);  

}
