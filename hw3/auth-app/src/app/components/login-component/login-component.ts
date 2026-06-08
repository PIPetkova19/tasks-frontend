import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})

export class LoginComponent {
  password: string = '';
  authService = inject(AuthService);
  error = signal(false);
  router = inject(Router);
  
  onLogin() {
    if (this.authService.login(this.password)) {
      this.router.navigate(['dashboard']);
    } else {
      this.error.set(true);
    }
  }
}
