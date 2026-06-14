import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service/auth.service';
import { ShellComponent } from './layout/shell/shell.component/shell.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet,ShellComponent],

})
export class App {
  protected readonly title = signal('uni-dashboard');
  authService = inject(AuthService);
}
