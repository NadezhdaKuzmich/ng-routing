import { Component } from '@angular/core';
import { AuthService } from '../../../app/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  logIn() {
    this.authService.logIn();
  }

  logOut() {
    this.authService.logOut();
  }
}
