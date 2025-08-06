import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCard } from './league-card';

describe('LeagueCard', () => {
  let component: LeagueCard;
  let fixture: ComponentFixture<LeagueCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
