import { Component, Input, inject, WritableSignal, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootballApiService } from '../../../services/football-api.service';
import { ClubCard } from '../../components/club-card/club-card';

@Component({
  selector: 'app-league-page',
  standalone: true,
  imports: [CommonModule, ClubCard],
  templateUrl: './league-page.html',
})
export class LeaguePage {
  @Input({ required: true }) leagueCode!: string;
  @Input({ required: true }) title!: string;

  private api = inject(FootballApiService);

  private _standings: WritableSignal<any | null> = signal(null);
  standingsSignal = computed(() => this._standings());

 constructor() {
    effect(() => {
      const code = this.leagueCode;
      if (!code) return;
      this.api.getStandingsCached(code).subscribe({
        next: (data) => this._standings.set(data),
        error: (err) => {
          console.error('Error fetching standings:', err);
          this._standings.set(null); // fallback or error state
        }
      });
    });
  }

  clubs = computed(() => {
    const data = this.standingsSignal();
    const table = (data as any)?.standings?.[0]?.table;
    return table?.map((entry: any) => ({
      id: entry.team.id,
      name: entry.team.name,
      logoUrl: entry.team.crest,
      position: entry.position,
      points: entry.points,
    })) || [];
  });

  loading = computed(() => this.standingsSignal() === null);
}
