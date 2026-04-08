import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-google-oauth',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './google-oauth.component.html',
  styleUrls: ['./google-oauth.component.scss']
})
export class GoogleOauthComponent {
  isLoading = false;
  step: 'initial' | 'redirecting' | 'callback' = 'initial';
  
  mockUser = {
    name: 'Demo User',
    email: 'demo@example.com',
    picture: '👤'
  };

  initiateGoogleLogin() {
    this.isLoading = true;
    this.step = 'redirecting';
    
    // Simulate OAuth redirect flow
    setTimeout(() => {
      this.step = 'callback';
      this.isLoading = false;
    }, 2000);
  }

  reset() {
    this.step = 'initial';
    this.isLoading = false;
  }
}
