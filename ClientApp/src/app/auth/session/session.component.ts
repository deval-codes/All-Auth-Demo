import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent {
  username = '';
  password = '';
  isLoading = false;
  isAuthenticated = false;
  
  sessionData = {
    sessionId: '',
    userId: '12345',
    username: '',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes
    ipAddress: '192.168.1.100',
    userAgent: 'Mozilla/5.0...'
  };

  cookies = [
    { name: 'session_id', value: '', httpOnly: true, secure: true, sameSite: 'Lax' },
    { name: 'csrf_token', value: '', httpOnly: false, secure: true, sameSite: 'Strict' }
  ];

  onLogin() {
    this.isLoading = true;
    
    setTimeout(() => {
      // Generate mock session
      this.sessionData.sessionId = 'sess_' + Math.random().toString(36).substring(2, 15);
      this.sessionData.username = this.username;
      this.cookies[0].value = this.sessionData.sessionId;
      this.cookies[1].value = 'csrf_' + Math.random().toString(36).substring(2, 10);
      
      this.isAuthenticated = true;
      this.isLoading = false;
    }, 1500);
  }

  logout() {
    this.isAuthenticated = false;
    this.sessionData.sessionId = '';
    this.username = '';
    this.password = '';
    this.cookies.forEach(cookie => cookie.value = '');
  }

  getTimeRemaining(): string {
    const diff = this.sessionData.expiresAt.getTime() - Date.now();
    const minutes = Math.floor(diff / 60000);
    return `${minutes} minutes`;
  }
}
