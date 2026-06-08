import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
  imports: [FormsModule, MatButtonModule,MatInputModule,MatFormFieldModule],
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
