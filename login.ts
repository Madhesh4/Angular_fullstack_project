import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // This fixes the ngModel error
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  // This fixes the "Property 'username' does not exist" error
  username: string = ''; 

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  // This fixes the "Property 'onLogin' does not exist" error
  onLogin() {
    if (this.username) {
      this.authService.login(this.username);
      this.router.navigate(['/dashboard']);
    }
  }
}