import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, tap, catchError, combineLatest, startWith, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { User } from '../user';
import { UserService } from '../services/user-service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-directory',
  templateUrl: './user-directory.html',
  styleUrl: './user-directory.css',
  imports: [CommonModule, ReactiveFormsModule, MatListModule,
    MatFormFieldModule, MatInputModule]
})

export class UserDirectoryComponent implements OnInit {
  searchControl = new FormControl('');
  errorMsg: string = '';
  users$!: Observable<User[]>;
  filteredUsers$!: Observable<User[]>;
  private userService = inject(UserService);

  ngOnInit() {
    this.users$ = this.userService.getUsers().pipe(
      catchError(() => { this.errorMsg = 'Failed to load users.'; return of([]) }));

    this.filteredUsers$ = combineLatest([
      this.users$,
      this.searchControl.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged()
      )
    ]).pipe(
      map(([users, query]) => {
        return users.filter(u => u.name.toLowerCase().includes((query ?? '').toLowerCase())) //ako e null -''
      }
      )
    );
  }
}
