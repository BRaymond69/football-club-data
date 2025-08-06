import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-league-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './league-card.html',
  styleUrls: ['./league-card.css']
})
export class LeagueCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
  @Input() link!: string;
}
