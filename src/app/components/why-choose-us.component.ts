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
    <section
      class="py-16 md:py-20"
      style="background-color: var(--soft-background);"
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
              Why Choose Us
            </span>
            <div
              class="w-8 h-0.5"
              style="background-color: var(--teal-accent);"
            ></div>
          </div>

          <h2
            style="font-family: var(--font-display); font-size: clamp(32px, 4vw, 48px); font-weight: 700; color: var(--dark-navy); line-height: 1.2; margin-bottom: 16px;"
          >
            We're Here for Your Health
          </h2>

          <p
            class="max-w-2xl mx-auto"
            style="font-size: 16px; color: var(--text-secondary); line-height: 1.6;"
          >
            State-of-the-art diagnostic services with certified professionals
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            *ngFor="let feature of features"
            class="p-6 rounded-xl transition-all duration-200 hover:shadow-lg"
            style="background-color: white; border: 1px solid var(--border-color);"
          >
            <div
              class="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style="background-color: var(--badge-bg);"
            >
              <span style="font-size: 24px;">{{ feature.icon }}</span>
            </div>
            <h3
              style="font-size: 16px; font-weight: 700; color: var(--dark-navy); margin-bottom: 8px;"
            >
              {{ feature.title }}
            </h3>
            <p
              style="font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin: 0;"
            >
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class WhyChooseUsComponent {
  features: Feature[] = [
    {
      title: 'NABL Certified',
      description: 'Accredited laboratory with international standards',
      icon: '✓',
    },
    {
      title: 'Same-Day Reports',
      description: 'Get your results within 24 hours on your mobile',
      icon: '⚡',
    },
    {
      title: 'Home Collection',
      description: 'Free home sample collection across the city',
      icon: '🚗',
    },
    {
      title: 'Expert Team',
      description: 'Experienced technicians and medical professionals',
      icon: '👩‍⚕️',
    },
  ];
}
