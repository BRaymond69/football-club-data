import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FootballApiService } from '../../../services/football-api.service';
import { ClubCard } from '../../components/club-card/club-card';
import { LeaguePage } from '../../shared/league-page/league-page';

@Component({
  selector: 'app-seriea',
  standalone: true,
  imports: [LeaguePage, CommonModule],
  template: `<app-league-page leagueCode="SA" title="Clubs de la Serie A"></app-league-page>`,
})
export class Seriea {
}
