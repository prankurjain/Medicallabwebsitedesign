import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngStyle]="{ 'background-color': 'var(--dark-navy)' }" style="padding: 64px 0 96px;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
        <div style="text-align: center; margin-bottom: 48px;">
          <div style="display: flex; align-items: center; gap: 12px; justify-content: center; margin-bottom: 8px;">
            <div style="width: 32px; height: 2px; background-color: var(--teal-accent);" />
            <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase;
                        letter-spacing: 0.1em; color: var(--teal-accent); font-weight: 500;">
              Why Choose Us
            </span>
            <div style="width: 32px; height: 2px; background-color: var(--teal-accent);" />
          </div>

          <h2 style="font-size: clamp(28px, 4vw, 32px); font-family: var(--font-sans); font-weight: 700;
                    color: white;">
            Healthcare You Can Trust
          </h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px;">
          <div *ngFor="let feature of features; let i = index"
               [ngStyle]="getFeatureStyle(i)"
               style="text-align: center;">
            <div style="display: flex; justify-content: center; margin-bottom: 16px;">
              <div style="width: 64px; height: 64px; border-radius: 50%; display: flex;
                         align-items: center; justify-content: center;
                         background-color: rgba(0, 191, 165, 0.2);">
                <span style="font-size: 32px;">{{ feature.icon }}</span>
              </div>
            </div>
            <h3 style="margin-bottom: 8px; font-size: 18px; font-family: var(--font-sans);
                      font-weight: 700; color: white;">
              {{ feature.title }}
            </h3>
            <p style="font-size: 14px; color: var(--soft-blue-white); line-height: 1.6;">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

      <style>
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class WhyChooseUsComponent {
  features: Feature[] = [
    {
      title: 'NABL Certified',
      icon: '🛡️',
      description: 'Accredited laboratory ensuring accurate and reliable test results with stringent quality control.',
    },
    {
      title: 'Same-Day Reports',
      icon: '⏱️',
      description: 'Get your test results within 24 hours for most tests. Urgent reports available on request.',
    },
    {
      title: 'Home Collection',
      icon: '🏠',
      description: 'Free sample collection from your home at your convenient time. Safe and hygienic process.',
    },
    {
      title: 'Transparent Pricing',
      icon: '💰',
      description: 'No hidden charges. What you see is what you pay. Compare and choose with confidence.',
    },
  ];
}
