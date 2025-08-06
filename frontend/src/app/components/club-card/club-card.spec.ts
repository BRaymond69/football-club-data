import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubCard } from './club-card';

describe('ClubCard', () => {
  let component: ClubCard;
  let fixture: ComponentFixture<ClubCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
