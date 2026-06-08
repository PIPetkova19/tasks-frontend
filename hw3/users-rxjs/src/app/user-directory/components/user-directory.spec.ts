import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectoryComponent } from './user-directory';

describe('UserDirectory', () => {
  let component: UserDirectoryComponent;
  let fixture: ComponentFixture<UserDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDirectoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDirectoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
