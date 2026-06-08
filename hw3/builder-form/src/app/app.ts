import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, FormArrayComponent]
})
export class App {
  protected readonly title = signal('builder-form');
}
