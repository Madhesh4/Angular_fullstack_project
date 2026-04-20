import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h1>Welcome to the Dashboard!</h1>
      <p *ngIf="authService.currentUser$ | async as user">Logged in as: <strong>{{ user.username }}</strong></p>
      <button (click)="onLogout()" style="background-color: red; color: white; border: none; padding: 10px; cursor: pointer;">Logout</button>
    </div>
  `
})
export class DashboardComponent {
  constructor(public authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}