import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { StudentService } from '../../../core/services/student.service/student.service';
import { Student } from '../../../core/models/student.model/student.model';
import { StatsService } from '../../../core/services/stats.service/stats.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard.component',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [MatCardModule, MatIconModule, MatTableModule, MatProgressBarModule, MatListModule, RouterLink, CommonModule]
})
export class DashboardComponent {
  topStudents: Student[] = [];
  weeklyActivity: { day: string; count: number }[] = [];
  displayedColumns = ['name', 'major', 'gpa'];
  studentStats: {
    total: number;
    active: number;
    avgGpa: number;
    graduated: number;
  } | null = null;
  private studentService = inject(StudentService);
  private statsService = inject(StatsService);

  ngOnInit() {
    this.topStudents = this.studentService.getTopStudents(5);
    this.weeklyActivity = this.statsService.getWeeklyActivity();
    this.studentStats = this.studentService.getStats();
  }

  /*namira nai g cislo i pravi procentite spored nego */
  get maxActivity(): number {
    return Math.max(...this.weeklyActivity.map(d => d.count));
  }

  getProgress(value: number): number {
    return this.maxActivity ? (value / this.maxActivity) * 100 : 0;
  }
}
