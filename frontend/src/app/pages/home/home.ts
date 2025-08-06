import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { LeaguesOverview } from "../../components/leagues-overview/leagues-overview";

@Component({
  selector: 'app-home',
  imports: [Hero, LeaguesOverview],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
