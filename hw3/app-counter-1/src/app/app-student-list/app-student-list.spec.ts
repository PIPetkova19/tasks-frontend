import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStudentList } from './app-student-list';

describe('AppStudentList', () => {
  let component: AppStudentList;
  let fixture: ComponentFixture<AppStudentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStudentList],
    }).compileComponents();

    fixture = TestBed.createComponent(AppStudentList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
