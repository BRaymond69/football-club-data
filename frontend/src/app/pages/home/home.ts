import { Component } from '@angular/core';
import { LeaguesOverview } from '../../components/leagues-overview/leagues-overview';
import { HeroImage } from '../../components/hero-image/hero-image';

@Component({
  selector: 'app-home',
  imports: [HeroImage, LeaguesOverview],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
