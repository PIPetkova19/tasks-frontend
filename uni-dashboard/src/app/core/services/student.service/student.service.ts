import { Injectable, signal } from '@angular/core';
import { Student } from '../../models/student.model/student.model';
@Injectable({
  providedIn: 'root',
})

export class StudentService {
   STUDENTS: Student[] = [
  { id: 1,  name: 'Alice Martin',  email: 'alice@uni.edu',  major: 'Computer Science', year: 3, gpa: 3.9,  status: 'Active',    enrolled: ['CS301', 'CS401', 'MATH301'] },
  { id: 2,  name: 'Bob Chen',      email: 'bob@uni.edu',    major: 'Mathematics',      year: 2, gpa: 3.5,  status: 'Active',    enrolled: ['MATH201', 'MATH301'] },
  { id: 3,  name: 'Clara Diaz',    email: 'clara@uni.edu',  major: 'Physics',          year: 4, gpa: 3.8,  status: 'Active',    enrolled: ['PHY401', 'MATH301'] },
  { id: 4,  name: 'David Kim',     email: 'david@uni.edu',  major: 'Computer Science', year: 1, gpa: 2.9,  status: 'Active',    enrolled: ['CS101', 'MATH101'] },
  { id: 5,  name: 'Eva Rossi',     email: 'eva@uni.edu',    major: 'Chemistry',        year: 3, gpa: 3.2,  status: 'Inactive',  enrolled: [] },
  { id: 6,  name: 'Frank Müller',  email: 'frank@uni.edu',  major: 'Computer Science', year: 4, gpa: 3.6,  status: 'Graduated', enrolled: [] },
  { id: 7,  name: 'Grace Lee',     email: 'grace@uni.edu',  major: 'Biology',          year: 2, gpa: 3.7,  status: 'Active',    enrolled: ['BIO201', 'CHEM201'] },
  { id: 8,  name: 'Henry Dubois',  email: 'henry@uni.edu',  major: 'Mathematics',      year: 3, gpa: 2.5,  status: 'Inactive',  enrolled: ['MATH301'] },
  { id: 9,  name: 'Isla Novak',    email: 'isla@uni.edu',   major: 'Physics',          year: 1, gpa: 3.4,  status: 'Active',    enrolled: ['PHY101', 'MATH101'] },
  { id: 10, name: 'James Okafor',  email: 'james@uni.edu',  major: 'Biology',          year: 4, gpa: 3.95, status: 'Graduated', enrolled: [] },
];
  
getAll(): Student[] {
  return this.STUDENTS;
}

getById(id: number): Student | undefined {
  return this.STUDENTS.find(s => s.id === id);
}

getByMajor(major: string): Student[] {
  return this.STUDENTS.filter(s => s.major === major);
}

getTopStudents(n: number): Student[] {
  return [...this.STUDENTS]
    .sort((a, b) => b.gpa - a.gpa)
    .slice(0, n);
}

getStats() {
  const total = this.STUDENTS.length;

  const active = this.STUDENTS.filter(
    s => s.status === 'Active'
  ).length;

  const graduated = this.STUDENTS.filter(
    s => s.status === 'Graduated'
  ).length;

  const avgGpa =
    this.STUDENTS.reduce((sum, s) => sum + s.gpa, 0) / total;

  return {
    total,
    active,
    avgGpa,
    graduated
  };
}
}
