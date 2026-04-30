import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { MessageCircle } from 'lucide-angular';

export type PackageTag = 'Best Seller' | 'For Women' | 'Most Popular';

export interface PackageCardProps {
  name: string;
  category: string;
  sampleType: string;
  reportTime: string;
  price: number;
  originalPrice?: number;
  testsCount: number;
  parametersCount: number;
  tag?: PackageTag;
  imageUrl?: string;
}

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div
      class="bg-white overflow-hidden transition-all duration-200 cursor-pointer"
      [style.border-radius]="'12px'"
      [style.border]="'1px solid ' + (isHovered ? 'var(--teal-accent)' : 'var(--border-color)')"
      [style.box-shadow]="isHovered ? '0 12px 32px rgba(13,43,78,0.12)' : '0 2px 12px rgba(13,43,78,0.06)'"
      [style.transform]="isHovered ? 'translateY(-6px)' : 'translateY(0)'"
      (mouseenter)="isHovered = true"
      (mouseleave)="isHovered = false"
    >
      <!-- Image Area -->
      <div class="relative" [style.height.px]="200">
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
            width="80"
            height="80"
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

        <!-- Tag Badge -->
        <div
          *ngIf="tag"
          class="absolute top-4 right-4 px-3 py-1"
          style="background-color: var(--primary-blue); border-radius: 99px;"
        >
          <span
            style="font-size: 11px; color: white; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-6 flex flex-col">
        <!-- Category -->
        <span
          class="text-xs mb-2"
          style="color: var(--primary-blue); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;"
        >
          {{ category }}
        </span>

        <!-- Package Name -->
        <h3
          class="mb-4"
          style="font-size: 19px; font-weight: 700; color: var(--dark-navy); line-height: 1.3;"
        >
          {{ name }}
        </h3>

        <!-- Tests & Parameters -->
        <div class="flex gap-6 mb-4">
          <div>
            <p
              style="font-size: 12px; color: var(--text-secondary); margin-bottom: 2px;"
            >
              Tests
            </p>
            <p
              style="font-size: 18px; font-weight: 700; color: var(--primary-blue);"
            >
              {{ testsCount }}
            </p>
          </div>
          <div>
            <p
              style="font-size: 12px; color: var(--text-secondary); margin-bottom: 2px;"
            >
              Parameters
            </p>
            <p
              style="font-size: 18px; font-weight: 700; color: var(--primary-blue);"
            >
              {{ parametersCount }}
            </p>
          </div>
        </div>

        <!-- Badges -->
        <div class="flex gap-2 mb-4 flex-wrap">
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
        <div class="flex items-baseline gap-2 mb-4">
          <span
            *ngIf="originalPrice"
            style="font-size: 14px; color: var(--text-secondary); text-decoration: line-through;"
          >
            ₹{{ originalPrice }}
          </span>
          <span
            style="font-size: 24px; font-weight: 700; color: var(--primary-blue);"
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

        <!-- WhatsApp Button -->
        <button
          class="w-full flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
          style="height: 44px; background-color: var(--whatsapp-green); color: white; border-radius: 8px; font-size: 14px; font-weight: 600;"
        >
          <lucide-icon [img]="messageCircleIcon" [size]="16"></lucide-icon>
          Book on WhatsApp
        </button>
      </div>
    </div>
  `,
})
export class PackageCardComponent {
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() sampleType: string = '';
  @Input() reportTime: string = '';
  @Input() price: number = 0;
  @Input() originalPrice?: number;
  @Input() testsCount: number = 0;
  @Input() parametersCount: number = 0;
  @Input() tag?: PackageTag;
  @Input() imageUrl?: string;

  isHovered = false;
  messageCircleIcon = MessageCircle;

  get savings(): number {
    return this.originalPrice ? this.originalPrice - this.price : 0;
  }
}
