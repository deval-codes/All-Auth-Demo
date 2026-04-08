import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jwt',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './jwt.component.html',
  styleUrls: ['./jwt.component.scss']
})
export class JwtComponent {
  email = '';
  password = '';
  isLoading = false;
  isAuthenticated = false;
  
  // Mock JWT token
  jwtToken = '';
  decodedToken = {
    header: { alg: 'HS256', typ: 'JWT' },
    payload: {
      sub: '1234567890',
      name: 'Demo User',
      email: 'demo@example.com',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600
    }
  };

  onLogin() {
    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      // Generate mock JWT
      const header = btoa(JSON.stringify(this.decodedToken.header));
      const payload = btoa(JSON.stringify(this.decodedToken.payload));
      const signature = btoa('mock-signature-' + Math.random().toString(36).substring(7));
      
      this.jwtToken = `${header}.${payload}.${signature}`;
      this.isAuthenticated = true;
      this.isLoading = false;
    }, 1500);
  }

  copyToken() {
    navigator.clipboard.writeText(this.jwtToken);
    alert('Token copied to clipboard!');
  }

  logout() {
    this.isAuthenticated = false;
    this.jwtToken = '';
    this.email = '';
    this.password = '';
  }

  formatJson(obj: any): string {
    return JSON.stringify(obj, null, 2);
  }
}
