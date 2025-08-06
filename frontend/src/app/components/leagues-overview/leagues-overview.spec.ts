import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesOverview } from './leagues-overview';

describe('LeaguesOverview', () => {
  let component: LeaguesOverview;
  let fixture: ComponentFixture<LeaguesOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaguesOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaguesOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
