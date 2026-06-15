import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { GpaGradePipe } from '../../../../core/pipes/gpa-grade.pipe-pipe';
import { StudentService } from '../../../../core/services/student.service/student.service';

@Component({
  selector: 'app-student-detail.component',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css',
  imports: [MatButtonModule, MatCardModule, RouterLink, MatProgressBarModule, GpaGradePipe,
    MatChipsModule, MatSnackBarModule
  ]
})
export class StudentDetailComponent {
  id: string | null = null;
  private route = inject(ActivatedRoute);
  private snackBar = inject(MatSnackBar);
  private studentService = inject(StudentService);
  student: any = null;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (!this.id) {
      return;
    }

    this.student = this.studentService.getById(Number(this.id));
    if (this.student) {

      this.snackBar.open(
        `Viewing profile of ${this.student.name}`,
        '',
        {
          duration: 2500
        }
      );
    }
  }
}
