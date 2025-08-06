import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Laliga } from './laliga';

describe('Laliga', () => {
  let component: Laliga;
  let fixture: ComponentFixture<Laliga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Laliga]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Laliga);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
