import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  // Define the username property to store input from the form
  username: string = ''; 

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  onLogin() {
    // Only proceed if a username has been entered
    if (this.username) {
      this.authService.login(this.username);
      this.router.navigate(['/dashboard']);
    }
  }
}