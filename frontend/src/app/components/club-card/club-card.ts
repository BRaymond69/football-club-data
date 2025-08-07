import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-card',
  imports: [],
  templateUrl: './club-card.html',
  styleUrl: './club-card.css',
})
export class ClubCard {
  @Input() name!: string;
  @Input() logoUrl!: string;
  @Input() id!: number;

  private router = inject(Router);

  goToClub(_: string, id: number) {
    const slug = encodeURIComponent(
      id.toString().toLowerCase().replace(/\s+/g, '-')
    );
    this.router.navigate([`club/${slug}`]);
  }
}
