import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = !!localStorage.getItem('token');

  constructor() {}

  login(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
