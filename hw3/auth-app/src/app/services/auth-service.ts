import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  isLoggedIn = signal(false);

  login(password: string): boolean {
    if (password === 'angular123') {
      this.isLoggedIn.set(true);
      return true;
    }
    return false;
  }
  
  logout(): void {
    this.isLoggedIn.set(false);
  }
}
