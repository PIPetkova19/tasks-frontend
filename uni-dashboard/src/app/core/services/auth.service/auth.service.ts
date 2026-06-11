import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  isLoggedIn = signal<boolean>(false);

  login(password: string): boolean {
    if (password === '0000') {
      this.isLoggedIn.set(true);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn.set(false);
  }
}
