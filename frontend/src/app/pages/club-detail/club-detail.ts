import { Component, computed, effect, inject, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { FootballApiService } from '../../../services/football-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-club-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club-detail.html',
  styleUrl: './club-detail.css',
})
export class ClubDetail {
  private route = inject(ActivatedRoute);
  private paramMapSignal = toSignal(this.route.paramMap);

  private api = inject(FootballApiService);

  private _standings: WritableSignal<any | null> = signal(null);
  standingsSignal = computed(() => this._standings());

  goBack() {
    window.history.back();
  }

  clubIdSignal = computed(() => {
    const paramMap = this.paramMapSignal();
    return paramMap?.get('id') ?? null;
  });

  constructor() {
    effect(() => {
      const clubId = this.clubIdSignal();
      if (clubId) {
        this.api.getTeamsCached(clubId).subscribe({
          next: (data) => {
            console.log('Club data:', data);
            this._standings.set(data);
          },
          error: (err) => {
            console.error('Error fetching club data:', err);
            this._standings.set(null);
          },
        });
      }
    });
  }

  squad = computed(() => {
    const data = this.standingsSignal();
    return (
      data?.squad?.map((player: any) => ({
        id: player.id,
        name: player.name,
        position: player.position,
        dateOfBirth: player.dateOfBirth,
      })) || []
    );
  });

  clubData = computed(() => {
    const data = this.standingsSignal();
    return {
      name: data?.name || 'N/A',
      logoUrl: data?.crest || 'N/A',
      address: data?.address || 'N/A',
      stadium: data?.venue || 'N/A',
      website: data?.website || 'N/A',
      founded: data?.founded || 'N/A',
    };
  });

  coach = computed(() => {
    const data = this.standingsSignal();
    return data?.coach
      ? {
          id: data.coach.id,
          name: data.coach.name,
          dateOfBirth: data.coach.dateOfBirth,
          contract: data.coach.contract
            ? {
                start: data.coach.contract.start,
                end: data.coach.contract.end,
              }
            : null,
        }
      : null;
  });

  competitions = computed(() => {
    const data = this.standingsSignal();
    return (
      data?.runningCompetitions?.map((comp: any) => ({
        id: comp.id,
        img: comp.emblem,
        name: comp.name,
      })) || []
    );
  });

  loading = computed(() => this.standingsSignal() === null);
}
