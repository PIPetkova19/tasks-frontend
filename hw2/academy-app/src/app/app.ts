import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('academy-app');

  courseName: string = 'Java';
  instructorName: string = 'Petya';
  currentYear: string = '2026';

  topics: string[] = [
    "topic 1",
    "topic 2",
    "topic 3"
  ]
}
