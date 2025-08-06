import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeaguePage } from '../../shared/league-page/league-page';

@Component({
  selector: 'app-premier-league',
  standalone: true,
  imports: [LeaguePage, CommonModule],
  template: `<app-league-page leagueCode="PL" title="Clubs de la Premier League"></app-league-page>`,
})
export class PremierLeague {}