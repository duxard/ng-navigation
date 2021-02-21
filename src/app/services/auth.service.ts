import { Injectable } from '@angular/core';

// Mock!!!
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthorised = false;

  login() {
    this.isAuthorised = true;
  }

  logout() {
    this.isAuthorised = false;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(this.isAuthorised);
      }, 1000);
    });
  }
}
