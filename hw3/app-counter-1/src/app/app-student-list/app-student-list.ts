import { Component } from '@angular/core';
import { Student } from '../common/student';
import { Grades } from '../common/grades';
import { NgClass } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-student-list',
  templateUrl: './app-student-list.html',
  styleUrl: './app-student-list.css',
  imports: [NgClass, MatTableModule]
})

export class AppStudentList {
  displayedColumns: string[] = ['name', 'major', 'grade'];

  Grades = Grades;

  students: Student[] = [
    { id: 1, name: 'Petya', major: 'Informatics', grade: Grades.A },
    { id: 2, name: 'Rado', major: 'STD', grade: Grades.B },
    { id: 3, name: 'Alex', major: 'Law', grade: Grades.C },
    { id: 4, name: 'Mitko', major: 'Engineering', grade: Grades.D },
    { id: 5, name: 'Kris', major: 'Art', grade: Grades.A },
  ];
}
