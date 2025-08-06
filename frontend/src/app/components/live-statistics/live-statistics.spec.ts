import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStatistics } from './live-statistics';

describe('LiveStatistics', () => {
  let component: LiveStatistics;
  let fixture: ComponentFixture<LiveStatistics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveStatistics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveStatistics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
