import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth = false;
  constructor() {}

  logIn() {
    this.isAuth = true;
  }

  logOut() {
    this.isAuth = false;
  }

  isLoggedIn() {
    return this.isAuth;
  }
}
