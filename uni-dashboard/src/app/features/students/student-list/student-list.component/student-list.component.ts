import { Component, inject } from '@angular/core';
import { StudentService } from '../../../../core/services/student.service/student.service';
import { Student } from '../../../../core/models/student.model/student.model';
import { MatSelectModule } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';
@Component({
  selector: 'app-student-list.component',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
  imports:[MatSelectModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatTableModule,
    MatSortModule,MatPaginatorModule,MatIconModule,MatChipsModule,RouterLink,MatProgressBar
  ]
})
export class StudentListComponent {
  displayedColumns = ['name', 'email', 'major','year','gpa','status','actions'];

  private studentService = inject(StudentService);

  allStudents: Student[] = this.studentService.getTopStudents(10);
  filteredStudents: Student[] = [...this.allStudents];

  nameControl = new FormControl('');
  statusControl = new FormControl('all');

  constructor() {
    this.nameControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(() => this.filter());
    this.statusControl.valueChanges
      .subscribe(() => this.filter());
  }

  filter() {
    const name = (this.nameControl.value ?? '').toLowerCase();
    const status = this.statusControl.value ?? 'all';

    this.filteredStudents = this.allStudents.filter(s => {
      const matchesName = s.name.toLowerCase().includes(name);
      const matchesStatus = status === 'all' ? true : s.status === status;

      return matchesName && matchesStatus;
    });
  }
}