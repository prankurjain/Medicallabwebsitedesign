import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-collection-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="py-16 md:py-20 relative overflow-hidden"
      style="background: linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-navy) 100%);"
    >
      <div class="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-white space-y-6">
            <h2
              style="font-family: var(--font-display); font-size: clamp(32px, 4vw, 48px); font-weight: 700; line-height: 1.2; margin: 0;"
            >
              We Come to You
            </h2>
            <p
              style="font-size: 18px; line-height: 1.6; color: rgba(255, 255, 255, 0.9); margin: 0;"
            >
              No need to visit our lab. Our trained professionals come to your home or office for sample collection. It's convenient, safe, and hygienic.
            </p>

            <div class="space-y-3 pt-4">
              <div class="flex items-center gap-3">
                <div
                  class="w-6 h-6 rounded-full flex items-center justify-center"
                  style="background-color: var(--teal-accent);"
                >
                  <span style="color: white; font-size: 12px;">✓</span>
                </div>
                <span style="font-size: 15px;">Free collection service</span>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-6 h-6 rounded-full flex items-center justify-center"
                  style="background-color: var(--teal-accent);"
                >
                  <span style="color: white; font-size: 12px;">✓</span>
                </div>
                <span style="font-size: 15px;">Safe & sterile containers</span>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-6 h-6 rounded-full flex items-center justify-center"
                  style="background-color: var(--teal-accent);"
                >
                  <span style="color: white; font-size: 12px;">✓</span>
                </div>
                <span style="font-size: 15px;">Certified phlebotomists</span>
              </div>
            </div>

            <button
              class="px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              style="background-color: var(--teal-accent); color: white; font-size: 16px; font-weight: 600; margin-top: 16px;"
            >
              Book Free Collection
            </button>
          </div>

          <!-- Right Visual -->
          <div class="hidden lg:flex items-center justify-center">
            <div
              class="relative w-full max-w-sm"
              style="height: 400px;"
            >
              <div
                class="absolute inset-0 rounded-2xl"
                style="background: linear-gradient(135deg, rgba(0, 191, 165, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%); border: 1px solid rgba(255, 255, 255, 0.2);"
              ></div>
              <div class="relative w-full h-full flex items-center justify-center">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="rgba(0, 191, 165, 0.3)"
                    stroke-width="2"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    stroke="rgba(0, 191, 165, 0.5)"
                    stroke-width="2"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="40"
                    fill="rgba(0, 191, 165, 0.2)"
                  />
                  <path
                    d="M100 70V130M70 100H130"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeCollectionBannerComponent {}
