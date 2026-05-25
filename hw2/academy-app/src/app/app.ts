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
      skills: ['Html', 'Css', 'Js'],
      description: 'intern at dreamix'
    },
    {
      name: 'Rado',
      role: 'Intern',
      skills: ['Html', 'Css', 'Js'],
      description: 'intern at scalefocus'
    },
    {
      name: 'Mimi',
      role: 'Intern',
      skills: ['Html', 'Css', 'Js'],
      description: 'student'
    },
    {
      name: 'Petya',
      role: 'Intern',
      skills: ['Html', 'Css', 'Js'],
      description: 'intern at dreamix'
    },
    {
      name: 'Petya',
      role: 'Intern',
      skills: ['Html', 'Css', 'Js'],
      description: 'intern at dreamix'
    }
  ];

  searchTerm: string = '';

  filterStudents(searchTerm: string) {
    return this.students.filter((student) => student.name.toLowerCase() === searchTerm.toLowerCase());
  }

  remove(name: string) {
    this.students = this.students.filter((student) => student.name !== name);
  }
}
