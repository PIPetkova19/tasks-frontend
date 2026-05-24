import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentCard } from './components/student-card/student-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentCard, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('academy-app');
  students = [
    {
      name: 'Petya',
      role: 'Intern',
      skills: ['Html', 'Css', 'Js']
    },
    {
      name: 'Rado',
      role: 'Intern',
      skills: ['Html', 'Css', 'Js']
    },
    {
      name: 'Mimi',
      role: 'Intern',
      skills: ['Html', 'Css', 'Js']
    },
    {
      name: 'Petya',
      role: 'Intern',
      skills: ['Html', 'Css', 'Js']
    },
    {
      name: 'Petya',
      role: 'Intern',
      skills: ['Html', 'Css', 'Js']
    }
  ];

  searchTerm: string = '';

  filterStudents(searchTerm: string) {
    return this.students.filter((student) => student.name.toLowerCase() === searchTerm.toLowerCase());
  }
}
