import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCounter } from './app-counter';

describe('AppCounter', () => {
  let component: AppCounter;
  let fixture: ComponentFixture<AppCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(AppCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
