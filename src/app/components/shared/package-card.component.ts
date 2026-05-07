import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

type TagType = 'Best Seller' | 'Most Popular' | 'For Women';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div (click)="goToDetail()"
         (mouseenter)="isHovered = true"
         (mouseleave)="isHovered = false"
         [ngStyle]="{ 'border-color': isHovered ? 'var(--teal-accent)' : 'var(--border-color)',
                      'box-shadow': isHovered ? '0 12px 32px rgba(13,43,78,0.12)' : '0 2px 12px rgba(13,43,78,0.06)',
                      'transform': isHovered ? 'translateY(-6px)' : 'translateY(0)' }"
         style="background-color: white; overflow: hidden; border-radius: 12px; border: 1px solid;
                 transition: all 200ms cubic-bezier(0.34, 1.56, 0.64, 1); cursor: pointer; min-height: 380px; position: relative;">
      
      <!-- Tag Ribbon -->
      <div *ngIf="tag"
           style="position: absolute; top: 0; right: 0; z-index: 10; width: 80px; height: 80px; overflow: hidden;">
        <div [ngStyle]="{ 'background-color': getTagColor() }"
             style="position: absolute; transform: rotate(45deg); width: 120px; height: 25px; top: 15px; right: -30px;
                    display: flex; align-items: center; justify-content: center;">
          <span style="font-size: 9px; color: white; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Image Area -->
      <div style="position: relative; height: 160px;">
        <img *ngIf="imageUrl"
             [src]="imageUrl"
             [alt]="name"
             style="width: 100%; height: 100%; object-fit: cover;" />
        
        <div *ngIf="!imageUrl"
             style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
                    background: linear-gradient(135deg, var(--badge-bg) 0%, var(--soft-background) 100%);">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="16" width="40" height="36" rx="4" stroke="var(--soft-blue-white)" stroke-width="3"/>
            <path d="M22 28H42M22 38H32" stroke="var(--soft-blue-white)" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>

        <!-- Category Badge -->
        <div style="position: absolute; bottom: 0; left: 12px; padding: 4px 12px;
                    background-color: rgba(26, 111, 191, 0.9); border-radius: 99px;
                    transform: translateY(50%);">
          <span style="font-size: 11px; color: white; font-family: var(--font-mono);
                       text-transform: uppercase; letter-spacing: 0.05em;">
            {{ category }}
          </span>
        </div>
      </div>

      <!-- Content Area -->
      <div style="padding: 24px; display: flex; flex-direction: column;">
        <div style="margin-bottom: auto;">
          <h3 style="margin-bottom: 8px; font-size: 17px; font-weight: 600; color: var(--dark-navy);
                     line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
                     overflow: hidden;">
            {{ name }}
          </h3>

          <p style="margin-bottom: 12px; font-size: 13px; color: var(--text-secondary);">
            Includes {{ testsCount }} tests • {{ parametersCount }} parameters
          </p>

          <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
            <span style="padding: 4px 8px; font-size: 10px; background-color: var(--badge-bg);
                        color: var(--primary-blue); border-radius: 99px; font-weight: 500;">
              {{ sampleType }}
            </span>
            <span style="padding: 4px 8px; font-size: 10px; background-color: var(--badge-bg);
                        color: var(--primary-blue); border-radius: 99px; font-weight: 500;">
              {{ reportTime }}
            </span>
          </div>

          <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 12px;">
            <span *ngIf="originalPrice"
                  style="font-size: 13px; color: var(--text-secondary); text-decoration: line-through;">
              ₹{{ originalPrice }}
            </span>
            <span style="font-size: 22px; font-weight: 700; color: var(--primary-blue);">
              ₹{{ price }}
            </span>
          </div>

          <div *ngIf="savings > 0"
               style="width: 100%; text-align: center; padding: 8px 0; margin-bottom: 16px;
                      background-color: var(--savings-bg); border-radius: 6px;">
            <span style="font-size: 13px; color: var(--success-green); font-weight: 600;">
              You save ₹{{ savings }}
            </span>
          </div>
        </div>

        <!-- WhatsApp Button -->
        <button style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;
                       height: 40px; background-color: var(--whatsapp-green); color: white; border-radius: 0 0 12px 12px;
                       font-size: 14px; font-weight: 600; margin-left: -24px; margin-right: -24px; margin-bottom: -24px;
                       border: none; cursor: pointer; transition: opacity 200ms;">
          <span>💬</span>
          Book on WhatsApp
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class PackageCardComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() sampleType: string = '';
  @Input() reportTime: string = '';
  @Input() price: number = 0;
  @Input() originalPrice?: number;
  @Input() testsCount: number = 0;
  @Input() parametersCount: number = 0;
  @Input() tag?: TagType;
  @Input() imageUrl?: string;

  isHovered = false;

  get savings(): number {
    return this.originalPrice ? this.originalPrice - this.price : 0;
  }

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate([`/packages/${this.id}`]);
  }

  getTagColor(): string {
    switch (this.tag) {
      case 'Best Seller':
        return 'var(--teal-accent)';
      case 'Most Popular':
        return 'var(--warning-amber)';
      case 'For Women':
        return '#EC4899';
      default:
        return 'var(--teal-accent)';
    }
  }
}
