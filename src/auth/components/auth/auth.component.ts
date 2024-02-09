import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../app/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isLogged: boolean | undefined;

  ngOnInit(): void {
    this.isLogged = this.authService.isLoggedIn();
  }

  logIn() {
    this.authService.logIn();
    this.isLogged = this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logOut();
    this.isLogged = this.authService.isLoggedIn();
  }
}
