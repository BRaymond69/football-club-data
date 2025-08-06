// leagues-overview.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeagueCard } from '../league-card/league-card';

@Component({
  selector: 'app-leagues-overview',
  standalone: true,
  imports: [CommonModule, LeagueCard],
  templateUrl: './leagues-overview.html',
  styleUrls: ['./leagues-overview.css']
})
export class LeaguesOverview {
  leagues = [
    {
      title: 'Ligue 1',
      description: 'French football\'s top division statistics and analysis',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Logo_Ligue_1_McDonald%27s_2024.svg',
      link: '/ligue1'
    },
    {
      title: 'La Liga',
      description: 'Spanish football\'s premier league data and insights',
      icon: 'https://upload.wikimedia.org/wikipedia/fr/2/23/Logo_La_Liga.png',
      link: '/laliga'
    },
    {
      title: 'Premier League',
      description: 'English football\'s top flight statistics',
      icon: 'https://upload.wikimedia.org/wikipedia/it/6/6d/Premier_League_Logo_2016.png',
      link: '/premier-league'
    },
    {
      title: 'Serie A',
      description: 'Italian football\'s leading division analytics',
      icon: 'https://upload.wikimedia.org/wikipedia/en/a/ab/Serie_A_ENILIVE_logo.svg',
      link: '/seriea'
    }
  ];
}
