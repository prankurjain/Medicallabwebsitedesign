import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer [ngStyle]="{ 'background-color': 'var(--dark-navy)' }">
      <div style="max-width: 1280px; margin: 0 auto; padding: 64px 20px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px;">
          
          <!-- Brand -->
          <div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <div style="width: 40px; height: 40px; border-radius: 50%; background-color: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 22V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span style="color: white; font-size: 20px; font-weight: bold;">PATHKIND LAB</span>
            </div>
            <p style="font-size: 14px; color: var(--soft-blue-white); line-height: 1.6; margin-bottom: 16px;">
              Your trusted partner for accurate diagnostic services and healthcare solutions.
            </p>
            <div style="display: flex; gap: 12px;">
              <a href="#" style="width: 32px; height: 32px; border-radius: 50%; background-color: #1A3D63; display: flex; align-items: center; justify-content: center; transition: background-color 200ms; text-decoration: none;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.5v2.25h2.5v-2.25h2.5l-4.25-3.54z"/>
                </svg>
              </a>
              <a href="#" style="width: 32px; height: 32px; border-radius: 50%; background-color: #1A3D63; display: flex; align-items: center; justify-content: center; transition: background-color 200ms; text-decoration: none;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.26c0-.85.63-1.63 1.67-1.63.98 0 1.73.7 1.73 1.63v4.26h2.5zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69-.93 0-1.69.76-1.69 1.69 0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.5H5.5v8.5h2.77z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; color: var(--teal-accent); font-weight: 500; margin-bottom: 16px;">
              Quick Links
            </h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <a href="#tests" style="font-size: 14px; color: var(--soft-blue-white); text-decoration: none; transition: color 200ms;">Tests</a>
              <a href="#packages" style="font-size: 14px; color: var(--soft-blue-white); text-decoration: none; transition: color 200ms;">Packages</a>
              <a href="/contact" style="font-size: 14px; color: var(--soft-blue-white); text-decoration: none; transition: color 200ms;">Contact</a>
              <a href="/login" style="font-size: 14px; color: var(--soft-blue-white); text-decoration: none; transition: color 200ms;">My Account</a>
            </div>
          </div>

          <!-- Contact -->
          <div>
            <h4 style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; color: var(--teal-accent); font-weight: 500; margin-bottom: 16px;">
              Contact
            </h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; align-items: flex-start; gap: 8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--teal-accent)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span style="font-size: 14px; color: var(--soft-blue-white);">+91 98765 43210</span>
              </div>
              <div style="display: flex; align-items: flex-start; gap: 8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--teal-accent)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span style="font-size: 14px; color: var(--soft-blue-white);">WhatsApp Support</span>
              </div>
              <div style="display: flex; align-items: flex-start; gap: 8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--teal-accent)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                </svg>
                <span style="font-size: 14px; color: var(--soft-blue-white); line-height: 1.5;">
                  123 Medical Plaza, Healthcare District<br />Mumbai - 400001
                </span>
              </div>
            </div>
          </div>

          <!-- Hours -->
          <div>
            <h4 style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; color: var(--teal-accent); font-weight: 500; margin-bottom: 16px;">
              Hours
            </h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; align-items: flex-start; gap: 8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--teal-accent)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                  <p style="font-size: 14px; color: var(--soft-blue-white);">Mon - Sat: 7:00 AM - 8:00 PM</p>
                  <p style="font-size: 14px; color: var(--soft-blue-white);">Sunday: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div style="padding: 8px 12px; background-color: rgba(0, 191, 165, 0.2); border-radius: 6px; display: inline-block; font-size: 12px; color: var(--teal-accent); font-weight: 600;">
                Home Collection Available
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div style="background-color: #0A2240; border-top: 1px solid rgba(255,255,255,0.1); padding: 16px 0;">
        <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px; display: flex; flex-direction: column; gap: 12px; align-items: center;">
          <p style="font-size: 13px; color: var(--soft-blue-white);">
            © 2026 PATHKIND LAB. All rights reserved.
          </p>
          <a href="#" style="font-size: 13px; color: var(--soft-blue-white); text-decoration: none; transition: color 200ms;">
            Book on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {}
