import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-collection-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding: 64px 0 80px;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
        <div style="border-radius: 16px; overflow: hidden;
                    background: linear-gradient(135deg, var(--teal-accent) 0%, #0082A5 100%);
                    box-shadow: 0 8px 32px rgba(0,191,165,0.25);">
          <div style="display: grid; grid-template-columns: 1fr; gap: 32px;
                      align-items: center; padding: 48px;">

            <!-- Left Text Content -->
            <div style="color: white;">
              <h2 style="font-size: clamp(28px, 4vw, 36px); font-family: var(--font-sans);
                         font-weight: 700; line-height: 1.2; margin-bottom: 16px;">
                Sample Collection at Your Doorstep
              </h2>
              <p style="font-size: 16px; opacity: 0.95; line-height: 1.6; margin-bottom: 24px;">
                Safe, hygienic, and convenient. Our trained phlebotomists will collect your samples
                from the comfort of your home at your preferred time slot.
              </p>

              <button style="display: flex; align-items: center; gap: 8px; padding: 0 24px;
                             height: 52px; border-radius: 12px; background-color: white;
                             color: var(--teal-accent); font-size: 16px; font-weight: 700;
                             border: none; cursor: pointer; transition: all 200ms;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Book Home Collection on WhatsApp
              </button>

              <div style="display: flex; flex-wrap: wrap; gap: 24px; margin-top: 24px;
                          font-size: 14px; opacity: 0.9;">
                <div *ngFor="let feature of features"
                     style="display: flex; align-items: center; gap: 8px;">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="white" stroke-width="2"/>
                    <path d="M6 10L9 13L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- Right Illustration (visible on wider screens via CSS) -->
            <div class="banner-illustration">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- House -->
                <rect x="80" y="140" width="140" height="120" rx="8" stroke="white" stroke-width="3" opacity="0.9"/>
                <path d="M60 150L150 80L240 150" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
                <rect x="120" y="200" width="30" height="40" rx="4" fill="white" opacity="0.7"/>
                <rect x="170" y="170" width="30" height="30" rx="4" stroke="white" stroke-width="2" opacity="0.7"/>
                <!-- Medical Kit -->
                <rect x="200" y="100" width="60" height="40" rx="6" fill="white" opacity="0.95"/>
                <path d="M220 115H240M230 105V125" stroke="var(--teal-accent)" stroke-width="3" stroke-linecap="round"/>
                <!-- Person -->
                <circle cx="45" cy="180" r="15" fill="white" opacity="0.9"/>
                <path d="M25 230C25 215 33 205 45 205C57 205 65 215 65 230" fill="white" opacity="0.9"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <style>
      .banner-illustration {
        display: none;
        justify-content: center;
      }
      @media (min-width: 1024px) {
        .banner-illustration {
          display: flex !important;
        }
        app-home-collection-banner > section > div > div > div {
          grid-template-columns: 1fr 1fr !important;
        }
      }
    </style>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HomeCollectionBannerComponent {
  features = ['Free Collection', 'Trained Staff', 'Safe & Hygienic'];
}
