import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeaguePage } from '../../shared/league-page/league-page';

@Component({
  selector: 'app-laliga',
  standalone: true,
  imports: [LeaguePage, CommonModule],
  template: `<app-league-page leagueCode="PD" title="La Liga"></app-league-page>`,
})
export class Laliga {}
