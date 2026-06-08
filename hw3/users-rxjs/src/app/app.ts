import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDirectoryComponent } from './user-directory/components/user-directory';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, UserDirectoryComponent]
})
export class App {
  protected readonly title = signal('users-rxjs');
}
