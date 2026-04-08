import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-username-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './username-password.component.html',
  styleUrls: ['./username-password.component.scss']
})
export class UsernamePasswordComponent {
  username = '';
  password = '';
  rememberMe = false;
  isLoading = false;
  showPassword = false;

  onSubmit() {
    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      alert(`Demo Login Attempt:\nUsername: ${this.username}\nPassword: ${this.password.replace(/./g, '*')}\nRemember Me: ${this.rememberMe}`);
    }, 1500);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
