import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden"
      style="background-color: var(--dark-navy); background-image: radial-gradient(circle at 20% 50%, rgba(0, 191, 165, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 191, 165, 0.03) 0%, transparent 50%);"
    >
      <!-- Background Pattern -->
      <div
        class="absolute inset-0"
        style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 8.66v17.32L30 34.64 15 25.98V8.66L30 0z' fill='%2300BFA5' fill-opacity='0.03'/%3E%3C/svg%3E&quot;); background-size: 60px 60px;"
      ></div>

      <div class="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Text Content -->
          <div class="text-center lg:text-left space-y-6">
            <!-- Small Label -->
            <div class="flex items-center gap-3 justify-center lg:justify-start label-fade-in">
              <div
                class="w-8 h-0.5"
                style="background-color: var(--teal-accent);"
              ></div>
              <span
                class="uppercase tracking-widest"
                style="color: var(--teal-accent); font-size: 11px; font-family: var(--font-mono); letter-spacing: 0.1em;"
              >
                Trusted Lab in Your City
              </span>
            </div>

            <!-- Main Heading -->
            <h1
              class="heading-fade-in"
              style="font-family: var(--font-display); font-size: clamp(40px, 6vw, 72px); font-weight: 700; color: white; line-height: 1.1;"
            >
              Your Health,<br />
              Clear & Simple.
            </h1>

            <!-- Subheading -->
            <p
              class="max-w-lg mx-auto lg:mx-0 subheading-fade-in"
              style="font-size: 18px; color: var(--soft-blue-white); line-height: 1.6;"
            >
              NABL certified diagnostic lab offering accurate results, home
              collection, and same-day reports at transparent prices.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start buttons-fade-in">
              <button
                class="px-8 transition-all duration-200 hover:shadow-lg hover:scale-105"
                style="height: 48px; border-radius: 20px; background-color: var(--teal-accent); color: white; font-size: 16px; font-weight: 600;"
              >
                View Tests & Prices
              </button>
              <button
                class="px-8 transition-all duration-200 hover:bg-white/10"
                style="height: 48px; border-radius: 20px; background-color: transparent; border: 1px solid white; color: white; font-size: 16px; font-weight: 600;"
              >
                Book on WhatsApp
              </button>
            </div>

            <!-- Trust Indicators -->
            <div
              class="flex flex-wrap items-center gap-3 justify-center lg:justify-start indicators-fade-in"
              style="font-size: 13px; color: var(--soft-blue-white);"
            >
              <span>NABL Certified</span>
              <span
                style="width: 4px; height: 4px; border-radius: 50%; background-color: var(--teal-accent);"
              ></span>
              <span>Same-Day Reports</span>
              <span
                style="width: 4px; height: 4px; border-radius: 50%; background-color: var(--teal-accent);"
              ></span>
              <span>Home Collection Available</span>
            </div>
          </div>

          <!-- Right Side - Visual -->
          <div class="hidden lg:flex items-center justify-center relative">
            <!-- Main Glowing Circle -->
            <div
              class="relative w-96 h-96 rounded-full flex items-center justify-center floating-element"
              style="background-color: rgba(0, 191, 165, 0.15); box-shadow: 0 0 120px rgba(0, 191, 165, 0.2);"
            >
              <!-- Center Icon -->
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 30C40 24.4772 44.4772 20 50 20H70C75.5228 20 80 24.4772 80 30V100H40V30Z"
                  stroke="var(--teal-accent)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="12"
                  stroke="var(--teal-accent)"
                  stroke-width="3"
                />
                <path
                  d="M40 100C40 105.523 44.4772 110 50 110H70C75.5228 110 80 105.523 80 110"
                  stroke="var(--teal-accent)"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>

              <!-- Floating Elements -->
              <div
                class="absolute floating-element-2"
                style="top: 10%; left: -10%;"
              >
                <div
                  class="w-16 h-16 rounded-full flex items-center justify-center"
                  style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);"
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M16 6L20 12H12L16 6Z M16 26L20 20H12L16 26Z"
                      fill="var(--teal-accent)"
                    />
                  </svg>
                </div>
              </div>

              <div
                class="absolute floating-element-3"
                style="bottom: 15%; right: -15%;"
              >
                <div
                  class="w-20 h-20 rounded-full flex items-center justify-center"
                  style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);"
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle
                      cx="20"
                      cy="20"
                      r="6"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M14 20L18 24L26 16"
                      stroke="var(--teal-accent)"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
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

        .label-fade-in {
          animation: fadeUp 600ms ease-out 0ms forwards;
        }

        .heading-fade-in {
          animation: fadeUp 600ms ease-out 100ms forwards;
        }

        .subheading-fade-in {
          animation: fadeUp 600ms ease-out 200ms forwards;
        }

        .buttons-fade-in {
          animation: fadeUp 600ms ease-out 300ms forwards;
        }

        .indicators-fade-in {
          animation: fadeUp 600ms ease-out 400ms forwards;
        }

        .floating-element {
          animation: floatingElement 4s ease-in-out infinite;
        }

        .floating-element-2 {
          animation: floatingElement 3s ease-in-out infinite;
        }

        .floating-element-3 {
          animation: floatingElement 3.5s ease-in-out infinite 0.5s;
        }
      </style>
    </section>
  `,
})
export class HeroSectionComponent {}
