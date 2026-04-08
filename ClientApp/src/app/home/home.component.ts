import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  authMethods = [
    {
      title: 'Username & Password',
      description: 'Traditional authentication with credentials',
      icon: '🔐',
      route: '/auth/username-password',
      status: 'active',
      color: '#4F46E5'
    },
    {
      title: 'Google OAuth 2.0',
      description: 'Sign in with your Google account',
      icon: '🔵',
      route: '/auth/google-oauth',
      status: 'active',
      color: '#DB4437'
    },
    {
      title: 'Generic OAuth 2.0',
      description: 'OAuth 2.0 flow demonstration',
      icon: '🔓',
      route: '/auth/oauth',
      status: 'active',
      color: '#10B981'
    },
    {
      title: 'JWT Token',
      description: 'JSON Web Token authentication',
      icon: '🎫',
      route: '/auth/jwt',
      status: 'active',
      color: '#F59E0B'
    },
    {
      title: 'Session Based',
      description: 'Server-side session management',
      icon: '🍪',
      route: '/auth/session',
      status: 'active',
      color: '#8B5CF6'
    },
    {
      title: 'GitHub OAuth',
      description: 'Authenticate with GitHub',
      icon: '⚫',
      route: '/auth/github-oauth',
      status: 'coming-soon',
      color: '#24292E'
    },
    {
      title: 'SAML 2.0',
      description: 'Enterprise SSO authentication',
      icon: '🏢',
      route: '/auth/saml',
      status: 'coming-soon',
      color: '#EC4899'
    },
    {
      title: 'Biometric Auth',
      description: 'Fingerprint & Face ID',
      icon: '👆',
      route: '/auth/biometric',
      status: 'coming-soon',
      color: '#06B6D4'
    }
  ];
}
