import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { LeaguePage } from '../../shared/league-page/league-page';

@Component({
  selector: 'app-ligue1',
  standalone: true,
  imports: [LeaguePage, CommonModule],
  template: `<app-league-page leagueCode="FL1" title="Clubs de la Ligue 1"></app-league-page>`,
})
export class Ligue1 {
}
