import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ligue1 } from './ligue1';

describe('Ligue1', () => {
  let component: Ligue1;
  let fixture: ComponentFixture<Ligue1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ligue1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ligue1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
