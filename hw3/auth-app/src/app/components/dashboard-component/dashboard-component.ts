import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})

export class DashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
