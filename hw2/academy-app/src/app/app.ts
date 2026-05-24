import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentCard } from './components/student-card/student-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('academy-app');
  name: string = 'Petya';
  role: string = 'Intern';
  skills: string[] = ['Html', 'Css', 'Js'];
}
