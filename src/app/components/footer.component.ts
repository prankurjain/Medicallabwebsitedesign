import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <footer style="background-color: var(--dark-navy);">
      <div class="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <!-- Column 1 - Brand -->
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center"
                style="background-color: rgba(255,255,255,0.1);"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 22V12"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span
                class="font-bold"
                style="color: white; font-size: 20px; font-family: var(--font-sans);"
              >
                PATHKIND LAB
              </span>
            </div>
            <p
              class="mb-4"
              style="font-size: 14px; color: var(--soft-blue-white); line-height: 1.6;"
            >
              Your trusted partner for accurate diagnostic services and
              healthcare solutions.
            </p>
            <div class="flex gap-3">
              <a
                href="#"
                class="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
                style="background-color: #1A3D63;"
              >
                <lucide-icon [img]="instagramIcon" [size]="16" color="white"></lucide-icon>
              </a>
              <a
                href="#"
                class="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
                style="background-color: #1A3D63;"
              >
                <lucide-icon [img]="facebookIcon" [size]="16" color="white"></lucide-icon>
              </a>
            </div>
          </div>

          <!-- Column 2 - Quick Links -->
          <div>
            <h4
              class="mb-4"
              style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; color: var(--teal-accent); font-weight: 500;"
            >
              Quick Links
            </h4>
            <div class="flex flex-col gap-2">
              <a
                *ngFor="let link of quickLinks"
                [href]="'#' + link.toLowerCase()"
                class="transition-colors duration-200 hover:text-white"
                style="font-size: 14px; color: var(--soft-blue-white);"
              >
                {{ link }}
              </a>
            </div>
          </div>

          <!-- Column 3 - Contact -->
          <div>
            <h4
              class="mb-4"
              style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; color: var(--teal-accent); font-weight: 500;"
            >
              Contact
            </h4>
            <div class="flex flex-col gap-3">
              <div class="flex items-start gap-2">
                <lucide-icon [img]="phoneIcon" [size]="16" style="color: var(--teal-accent); margin-top: 2px;"></lucide-icon>
                <span
                  style="font-size: 14px; color: var(--soft-blue-white);"
                >
                  +91 98765 43210
                </span>
              </div>
              <div class="flex items-start gap-2">
                <lucide-icon [img]="messageIcon" [size]="16" style="color: var(--teal-accent); margin-top: 2px;"></lucide-icon>
                <span
                  style="font-size: 14px; color: var(--soft-blue-white);"
                >
                  WhatsApp Support
                </span>
              </div>
              <div class="flex items-start gap-2">
                <lucide-icon [img]="mapPinIcon" [size]="16" style="color: var(--teal-accent); margin-top: 2px;"></lucide-icon>
                <span
                  style="font-size: 14px; color: var(--soft-blue-white); line-height: 1.5;"
                >
                  123 Medical Plaza, Healthcare District, Mumbai - 400001
                </span>
              </div>
            </div>
          </div>

          <!-- Column 4 - Hours -->
          <div>
            <h4
              class="mb-4"
              style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; color: var(--teal-accent); font-weight: 500;"
            >
              Hours
            </h4>
            <div class="flex flex-col gap-2">
              <div class="flex items-start gap-2">
                <lucide-icon [img]="clockIcon" [size]="16" style="color: var(--teal-accent); margin-top: 2px;"></lucide-icon>
                <div>
                  <p
                    style="font-size: 14px; color: var(--soft-blue-white);"
                  >
                    Mon - Sat: 7:00 AM - 8:00 PM
                  </p>
                  <p
                    style="font-size: 14px; color: var(--soft-blue-white);"
                  >
                    Sunday: 8:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
              <div
                class="px-3 py-1 inline-block mt-2"
                style="background-color: rgba(0, 191, 165, 0.2); border-radius: 6px; font-size: 12px; color: var(--teal-accent); font-weight: 600;"
              >
                Home Collection Available
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="py-4"
        style="background-color: #0A2240; border-top: 1px solid rgba(255,255,255,0.1);"
      >
        <div class="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            style="font-size: 13px; color: var(--soft-blue-white);"
          >
            © 2026 PATHKIND LAB. All rights reserved.
          </p>
          <a
            href="#"
            class="transition-colors duration-200 hover:text-white"
            style="font-size: 13px; color: var(--soft-blue-white);"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  quickLinks = ['Tests', 'Packages', 'Contact', 'My Account'];
  phoneIcon = Phone;
  messageIcon = MessageCircle;
  mapPinIcon = MapPin;
  clockIcon = Clock;
  instagramIcon = Instagram;
  facebookIcon = Facebook;
}
