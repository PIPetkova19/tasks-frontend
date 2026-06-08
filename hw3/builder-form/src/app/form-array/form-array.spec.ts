import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayComponent } from './form-array';

describe('FormArray', () => {
  let component: FormArrayComponent;
  let fixture: ComponentFixture<FormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArrayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormArrayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
