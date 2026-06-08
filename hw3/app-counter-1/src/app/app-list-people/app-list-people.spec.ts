import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListPeople } from './app-list-people';

describe('AppListPeople', () => {
  let component: AppListPeople;
  let fixture: ComponentFixture<AppListPeople>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppListPeople],
    }).compileComponents();

    fixture = TestBed.createComponent(AppListPeople);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
