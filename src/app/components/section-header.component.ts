import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-12 text-center">
      <!-- Label -->
      <div class="flex items-center gap-3 justify-center mb-4">
        <div
          class="w-8 h-0.5"
          style="background-color: var(--teal-accent);"
        ></div>
        <span
          class="uppercase tracking-widest"
          style="color: var(--teal-accent); font-size: 11px; font-family: var(--font-mono); letter-spacing: 0.1em;"
        >
          {{ label }}
        </span>
        <div
          class="w-8 h-0.5"
          style="background-color: var(--teal-accent);"
        ></div>
      </div>

      <!-- Title -->
      <h2
        class="mb-3"
        style="font-family: var(--font-display); font-size: clamp(32px, 4vw, 48px); font-weight: 700; color: var(--dark-navy); line-height: 1.2;"
      >
        {{ title }}
      </h2>

      <!-- Subtitle -->
      <p
        class="max-w-2xl mx-auto"
        style="font-size: 16px; color: var(--text-secondary); line-height: 1.6;"
      >
        {{ subtitle }}
      </p>

      <!-- View All Link -->
      <a
        *ngIf="viewAllLink"
        href="#"
        class="inline-block mt-4 transition-colors duration-200 hover:text-white"
        style="color: var(--primary-blue); font-size: 14px; font-weight: 600; text-decoration: none;"
      >
        View All →
      </a>
    </div>
  `,
})
export class SectionHeaderComponent {
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() viewAllLink: boolean = false;
}
