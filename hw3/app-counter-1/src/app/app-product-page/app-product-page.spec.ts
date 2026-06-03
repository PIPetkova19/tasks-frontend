import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductPage } from './app-product-page';

describe('AppProductPage', () => {
  let component: AppProductPage;
  let fixture: ComponentFixture<AppProductPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProductPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AppProductPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
