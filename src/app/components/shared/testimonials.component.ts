import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding: 64px 0 96px; background-color: var(--soft-background);">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
        <div style="text-align: center; margin-bottom: 48px;">
          <div style="display: flex; align-items: center; gap: 12px; justify-content: center; margin-bottom: 8px;">
            <div style="width: 32px; height: 2px; background-color: var(--teal-accent);"></div>
            <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase;
                         letter-spacing: 0.1em; color: var(--primary-blue); font-weight: 500;">
              Testimonials
            </span>
            <div style="width: 32px; height: 2px; background-color: var(--teal-accent);"></div>
          </div>
          <h2 style="font-size: clamp(28px, 4vw, 32px); font-family: var(--font-sans);
                     font-weight: 700; color: var(--dark-navy);">
            What Our Patients Say
          </h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
          <div *ngFor="let testimonial of testimonials"
               style="background-color: white; padding: 24px; border-radius: 12px; position: relative;
                      box-shadow: 0 2px 12px rgba(13,43,78,0.06);">
            <!-- Quote Mark -->
            <div style="position: absolute; top: 16px; left: 16px; opacity: 0.2;
                        font-family: var(--font-display); font-size: 64px;
                        color: var(--teal-accent); line-height: 1;">
              "
            </div>

            <div style="position: relative; padding-top: 32px;">
              <p style="margin-bottom: 16px; font-style: italic; font-size: 15px;
                        color: var(--text-primary); line-height: 1.6;">
                {{ testimonial.quote }}
              </p>

              <div style="display: flex; gap: 4px; margin-bottom: 8px;">
                <span *ngFor="let star of stars" style="font-size: 14px; color: #FFC107;">★</span>
              </div>

              <p style="font-size: 14px; font-weight: 700; color: var(--dark-navy);">
                {{ testimonial.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class TestimonialsComponent {
  stars = [1, 2, 3, 4, 5];
  testimonials: Testimonial[] = [
    {
      quote: 'Excellent service! The home collection was punctual and professional. Got my reports within 12 hours. Highly recommend PATHKIND LAB.',
      name: 'Priya Sharma',
    },
    {
      quote: 'Very impressed with the accuracy and speed of the reports. The staff was courteous and the entire process was seamless.',
      name: 'Rajesh Kumar',
    },
    {
      quote: 'The prices are transparent and reasonable. No hidden charges. The WhatsApp booking made it super convenient for me.',
      name: 'Anita Desai',
    },
  ];
}
