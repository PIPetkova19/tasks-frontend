import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegistrationForm } from './app-registration-form';

describe('RegistrationForm', () => {
  let component: AppRegistrationForm;
  let fixture: ComponentFixture<AppRegistrationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRegistrationForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AppRegistrationForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
