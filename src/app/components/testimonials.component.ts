import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="py-16 md:py-20"
      style="background-color: white;"
    >
      <div class="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <!-- Header -->
        <div class="mb-12 text-center">
          <div class="flex items-center gap-3 justify-center mb-4">
            <div
              class="w-8 h-0.5"
              style="background-color: var(--teal-accent);"
            ></div>
            <span
              class="uppercase tracking-widest"
              style="color: var(--teal-accent); font-size: 11px; font-family: var(--font-mono); letter-spacing: 0.1em;"
            >
              Testimonials
            </span>
            <div
              class="w-8 h-0.5"
              style="background-color: var(--teal-accent);"
            ></div>
          </div>

          <h2
            style="font-family: var(--font-display); font-size: clamp(32px, 4vw, 48px); font-weight: 700; color: var(--dark-navy); line-height: 1.2; margin-bottom: 16px;"
          >
            What Our Customers Say
          </h2>

          <p
            class="max-w-2xl mx-auto"
            style="font-size: 16px; color: var(--text-secondary); line-height: 1.6;"
          >
            Join thousands of satisfied customers who trust PATHKIND LAB
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let testimonial of testimonials"
            class="p-6 rounded-xl"
            style="background-color: var(--soft-background); border: 1px solid var(--border-color);"
          >
            <!-- Rating -->
            <div class="flex gap-1 mb-4">
              <span *ngFor="let i of [1,2,3,4,5]" style="font-size: 16px;">
                {{ i <= testimonial.rating ? '⭐' : '☆' }}
              </span>
            </div>

            <!-- Content -->
            <p
              class="mb-6"
              style="font-size: 15px; color: var(--text-primary); line-height: 1.6; margin: 0; font-style: italic;"
            >
              "{{ testimonial.content }}"
            </p>

            <!-- Author -->
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center"
                style="background-color: var(--primary-blue);"
              >
                <span style="font-size: 20px; color: white;">{{ testimonial.avatar }}</span>
              </div>
              <div>
                <p
                  style="font-size: 14px; font-weight: 600; color: var(--dark-navy); margin: 0;"
                >
                  {{ testimonial.name }}
                </p>
                <p
                  style="font-size: 12px; color: var(--text-secondary); margin: 0;"
                >
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Executive',
      content: 'Quick, professional, and very convenient. The home collection service is a lifesaver for my busy schedule.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Priya Sharma',
      role: 'Homemaker',
      content: 'Highly professional team. Results were accurate and delivered within the promised timeframe.',
      rating: 5,
      avatar: '👩‍🦰',
    },
    {
      name: 'Amit Patel',
      role: 'Software Engineer',
      content: 'Great experience! The online appointment booking and WhatsApp updates made everything super easy.',
      rating: 5,
      avatar: '👨‍💻',
    },
  ];
}
