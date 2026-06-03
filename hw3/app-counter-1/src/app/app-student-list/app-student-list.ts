import { Component } from '@angular/core';
import { Student } from '../common/student';
import { Grades } from '../common/grades';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-student-list',
  templateUrl: './app-student-list.html',
  styleUrl: './app-student-list.css',
  imports: [NgClass]
})
export class AppStudentList {
  Grades = Grades;
  
  students: Student[] = [
    { id: 1, name: 'Petya', major: 'Informatics', grade: Grades.A },
    { id: 2, name: 'Rado', major: 'STD', grade: Grades.B },
    { id: 3, name: 'Alex', major: 'Law', grade: Grades.C },
    { id: 4, name: 'Mitko', major: 'Engineering', grade: Grades.D },
    { id: 5, name: 'Kris', major: 'Art', grade: Grades.A },
  ];



}
