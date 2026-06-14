import { Injectable, signal } from '@angular/core';
import { Course } from '../../models/course.model/course.model';
@Injectable({
  providedIn: 'root',
})

export class CourseService {
   COURSES: Course[] = [
  { code: 'CS101',   title: 'Intro to Programming',  instructor: 'Dr. Smith',  credits: 3, capacity: 30, enrolled: 28, department: 'Computer Science' },
  { code: 'CS301',   title: 'Data Structures',       instructor: 'Dr. Lee',    credits: 3, capacity: 25, enrolled: 25, department: 'Computer Science' },
  { code: 'CS401',   title: 'Machine Learning',      instructor: 'Dr. Patel',  credits: 4, capacity: 20, enrolled: 14, department: 'Computer Science' },
  { code: 'MATH101', title: 'Calculus I',            instructor: 'Dr. Brown',  credits: 4, capacity: 40, enrolled: 38, department: 'Mathematics' },
  { code: 'MATH301', title: 'Linear Algebra',        instructor: 'Dr. Garcia', credits: 3, capacity: 30, enrolled: 22, department: 'Mathematics' },
  { code: 'PHY101',  title: 'General Physics',       instructor: 'Dr. Wilson', credits: 3, capacity: 35, enrolled: 20, department: 'Physics' },
  { code: 'BIO201',  title: 'Cell Biology',          instructor: 'Dr. Adams',  credits: 3, capacity: 25, enrolled: 18, department: 'Biology' },
  { code: 'CHEM201', title: 'Organic Chemistry',     instructor: 'Dr. Evans',  credits: 4, capacity: 20, enrolled: 20, department: 'Chemistry' },
];
}
