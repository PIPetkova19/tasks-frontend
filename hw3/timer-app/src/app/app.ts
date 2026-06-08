import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './components/parent/parent';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, ParentComponent],
})

export class App {
  protected readonly title = signal('timer-app');
}
