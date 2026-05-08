import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../components/shared/navigation.component';
import { FooterComponent } from '../components/shared/footer.component';
import { WhatsAppFABComponent } from '../components/shared/whatsapp-fab.component';

@Component({
  selector: 'app-root-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    FooterComponent,
    WhatsAppFABComponent,
  ],
  template: `
    <div class="min-h-screen root-container">
      <app-navigation></app-navigation>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
      <app-whatsapp-fab></app-whatsapp-fab>
    </div>
  `,
  styles: [
    `
      .root-container {
        background-color: var(--soft-background);
      }
    `,
  ],
})
export class RootLayoutComponent {}
