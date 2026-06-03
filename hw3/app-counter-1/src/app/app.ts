import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCounter } from './app-counter/app-counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppCounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-counter-1');
}
