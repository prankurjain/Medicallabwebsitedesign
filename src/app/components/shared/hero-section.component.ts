import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="position: relative; min-height: 85vh; display: flex; align-items: center; overflow: hidden;
                    background-color: var(--dark-navy);
                    background-image: radial-gradient(circle at 20% 50%, rgba(0, 191, 165, 0.03) 0%, transparent 50%), 
                                      radial-gradient(circle at 80% 50%, rgba(0, 191, 165, 0.03) 0%, transparent 50%);">
      
      <!-- Background Pattern -->
      <div style="position: absolute; inset: 0;
                  background-image: url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M30 0l15 8.66v17.32L30 34.64 15 25.98V8.66L30 0z%27 fill=%27%2300BFA5%27 fill-opacity=%270.03%27/%3E%3C/svg%3E');
                  background-size: 60px 60px;">
      </div>

      <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px; width: 100%; position: relative; z-index: 10;">
        <div style="display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center;">
          
          <!-- Left Side - Text -->
          <div style="text-align: center; space-y: 24px;">
            <div style="display: flex; align-items: center; gap: 12px; justify-content: center; margin-bottom: 24px; animation: fadeUp 600ms ease-out 0ms forwards; opacity: 0;">
              <div style="width: 32px; height: 2px; background-color: var(--teal-accent);" />
              <span style="color: var(--teal-accent); font-size: 11px; font-family: var(--font-mono);
                          text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500;">
                Trusted Lab in Your City
              </span>
            </div>

            <h1 style="font-family: var(--font-display); font-size: clamp(40px, 6vw, 72px); font-weight: 700;
                       color: white; line-height: 1.1; margin-bottom: 24px; animation: fadeUp 600ms ease-out 100ms forwards; opacity: 0;">
              Your Health,<br />Clear & Simple.
            </h1>

            <p style="font-size: 18px; color: var(--soft-blue-white); line-height: 1.6; max-width: 540px;
                      margin: 0 auto 24px; animation: fadeUp 600ms ease-out 200ms forwards; opacity: 0;">
              NABL certified diagnostic lab offering accurate results, home collection, and same-day reports at transparent prices.
            </p>

            <div style="display: flex; flex-direction: column; gap: 16px; justify-content: center; align-items: center;
                        animation: fadeUp 600ms ease-out 300ms forwards; opacity: 0;">
              <button style="padding: 0 32px; height: 48px; border-radius: 20px; background-color: var(--teal-accent);
                            color: white; font-size: 16px; font-weight: 600; border: none; cursor: pointer;
                            transition: all 200ms; box-shadow: 0 2px 12px rgba(0,191,165,0.1);">
                View Tests & Prices
              </button>
              <button style="padding: 0 32px; height: 48px; border-radius: 20px; background-color: transparent;
                            border: 1px solid white; color: white; font-size: 16px; font-weight: 600;
                            cursor: pointer; transition: all 200ms;">
                Book on WhatsApp
              </button>
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 24px;
                        font-size: 13px; color: var(--soft-blue-white); animation: fadeUp 600ms ease-out 400ms forwards; opacity: 0;">
              <span>NABL Certified</span>
              <span style="width: 4px; height: 4px; border-radius: 50%; background-color: var(--teal-accent);" />
              <span>Same-Day Reports</span>
              <span style="width: 4px; height: 4px; border-radius: 50%; background-color: var(--teal-accent);" />
              <span>Home Collection Available</span>
            </div>
          </div>
        </div>
      </div>

      <style>
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatingElement {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .floatingElement {
          animation: floatingElement 4s ease-in-out infinite;
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
export class HeroSectionComponent {}
