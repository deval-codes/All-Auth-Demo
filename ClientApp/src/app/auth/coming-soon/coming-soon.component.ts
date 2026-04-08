import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  authMethod: string = '';
  
  ngOnInit() {
    // Get the auth method from the route or default
    const path = window.location.pathname;
    if (path.includes('github')) {
      this.authMethod = 'GitHub OAuth';
    } else if (path.includes('saml')) {
      this.authMethod = 'SAML 2.0';
    } else if (path.includes('biometric')) {
      this.authMethod = 'Biometric Authentication';
    } else {
      this.authMethod = 'This Authentication Method';
    }
  }
}
