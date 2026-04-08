import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsernamePasswordComponent } from './auth/username-password/username-password.component';
import { GoogleOauthComponent } from './auth/google-oauth/google-oauth.component';
import { OauthComponent } from './auth/oauth/oauth.component';
import { JwtComponent } from './auth/jwt/jwt.component';
import { SessionComponent } from './auth/session/session.component';
import { ComingSoonComponent } from './auth/coming-soon/coming-soon.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/username-password', component: UsernamePasswordComponent },
  { path: 'auth/google-oauth', component: GoogleOauthComponent },
  { path: 'auth/oauth', component: OauthComponent },
  { path: 'auth/jwt', component: JwtComponent },
  { path: 'auth/session', component: SessionComponent },
  { path: 'auth/github-oauth', component: ComingSoonComponent },
  { path: 'auth/saml', component: ComingSoonComponent },
  { path: 'auth/biometric', component: ComingSoonComponent },
  { path: '**', redirectTo: '' }
];
