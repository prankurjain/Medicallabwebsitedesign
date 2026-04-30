import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { MessageCircle } from 'lucide-angular';

export interface TestCardProps {
  name: string;
  category: string;
  sampleType: string;
  reportTime: string;
  price: number;
  originalPrice?: number;
  imageUrl?: string;
}

@Component({
  selector: 'app-test-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div
      class="bg-white overflow-hidden transition-all duration-200 cursor-pointer"
      [style.height.px]="340"
      [style.border-radius]="'12px'"
      [style.border]="'1px solid ' + (isHovered ? 'var(--teal-accent)' : 'var(--border-color)')"
      [style.box-shadow]="isHovered ? '0 12px 32px rgba(13,43,78,0.12)' : '0 2px 12px rgba(13,43,78,0.06)'"
      [style.transform]="isHovered ? 'translateY(-6px)' : 'translateY(0)'"
      (mouseenter)="isHovered = true"
      (mouseleave)="isHovered = false"
    >
      <!-- Image Area -->
      <div class="relative" [style.height.px]="160">
        <img
          *ngIf="imageUrl"
          [src]="imageUrl"
          [alt]="name"
          class="w-full h-full object-cover"
        />
        <div
          *ngIf="!imageUrl"
          class="w-full h-full flex items-center justify-center"
          style="background: linear-gradient(135deg, var(--badge-bg) 0%, var(--soft-background) 100%);"
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 16C20 13.7909 21.7909 12 24 12H40C42.2091 12 44 13.7909 44 16V52H20V16Z"
              stroke="var(--soft-blue-white)"
              stroke-width="3"
              stroke-linecap="round"
            />
            <circle
              cx="32"
              cy="32"
              r="6"
              stroke="var(--soft-blue-white)"
              stroke-width="3"
            />
          </svg>
        </div>

        <!-- Category Badge -->
        <div
          class="absolute bottom-0 left-3 px-3 py-1"
          style="background-color: rgba(26, 111, 191, 0.9); border-radius: 99px; transform: translateY(50%);"
        >
          <span
            style="font-size: 11px; color: white; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em;"
          >
            {{ category }}
          </span>
        </div>
      </div>

      <!-- Content Area -->
      <div
        class="p-6 flex flex-col justify-between"
        [style.height.px]="180"
      >
        <div>
          <!-- Test Name -->
          <h3
            class="mb-2 line-clamp-2"
            style="font-size: 17px; font-weight: 600; color: var(--dark-navy); line-height: 1.3;"
          >
            {{ name }}
          </h3>

          <!-- Badges Row -->
          <div class="flex gap-2 mb-3 flex-wrap">
            <span
              class="px-2 py-1"
              style="font-size: 10px; background-color: var(--badge-bg); color: var(--primary-blue); border-radius: 99px; font-weight: 500;"
            >
              {{ sampleType }}
            </span>
            <span
              class="px-2 py-1"
              style="font-size: 10px; background-color: var(--badge-bg); color: var(--primary-blue); border-radius: 99px; font-weight: 500;"
            >
              {{ reportTime }}
            </span>
          </div>

          <!-- Price Block -->
          <div class="flex items-baseline gap-2 mb-2">
            <span
              *ngIf="originalPrice"
              style="font-size: 13px; color: var(--text-secondary); text-decoration: line-through;"
            >
              ₹{{ originalPrice }}
            </span>
            <span
              style="font-size: 22px; font-weight: 700; color: var(--primary-blue);"
            >
              ₹{{ price }}
            </span>
            <span
              *ngIf="savings > 0"
              class="px-2 py-0.5"
              style="font-size: 11px; background-color: var(--savings-bg); color: var(--success-green); border-radius: 99px; font-weight: 600;"
            >
              Save ₹{{ savings }}
            </span>
          </div>
        </div>

        <!-- WhatsApp Button -->
        <button
          class="w-full flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
          style="height: 40px; background-color: var(--whatsapp-green); color: white; border-radius: 0 0 12px 12px; font-size: 14px; font-weight: 600; margin-left: -24px; margin-right: -24px; margin-bottom: -24px;"
        >
          <lucide-icon [img]="messageCircleIcon" [size]="16"></lucide-icon>
          Book on WhatsApp
        </button>
      </div>
    </div>
  `,
})
export class TestCardComponent {
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() sampleType: string = '';
  @Input() reportTime: string = '';
  @Input() price: number = 0;
  @Input() originalPrice?: number;
  @Input() imageUrl?: string;

  isHovered = false;
  messageCircleIcon = MessageCircle;

  get savings(): number {
    return this.originalPrice ? this.originalPrice - this.price : 0;
  }
}
