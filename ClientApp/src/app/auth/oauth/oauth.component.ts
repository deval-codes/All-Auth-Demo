import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-oauth',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OauthComponent {
  selectedProvider = '';
  step: 'select' | 'authorize' | 'callback' = 'select';
  authCode = '';
  accessToken = '';

  providers = [
    { name: 'GitHub', icon: '⚫', color: '#24292E' },
    { name: 'Microsoft', icon: '🔷', color: '#0078D4' },
    { name: 'Facebook', icon: '🔵', color: '#1877F2' },
    { name: 'Twitter/X', icon: '⚫', color: '#000000' },
    { name: 'LinkedIn', icon: '🔷', color: '#0A66C2' },
    { name: 'Custom OAuth', icon: '🔧', color: '#6366F1' }
  ];

  selectProvider(provider: string) {
    this.selectedProvider = provider;
    this.step = 'authorize';
    
    // Simulate authorization
    setTimeout(() => {
      this.authCode = 'AUTH_CODE_' + Math.random().toString(36).substring(7);
      this.accessToken = 'ACCESS_TOKEN_' + Math.random().toString(36).substring(7);
      this.step = 'callback';
    }, 2000);
  }

  reset() {
    this.step = 'select';
    this.selectedProvider = '';
    this.authCode = '';
    this.accessToken = '';
  }
}
