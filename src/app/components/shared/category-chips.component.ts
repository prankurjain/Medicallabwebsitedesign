import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  id: number;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-category-chips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngStyle]="{ 'background-color': 'var(--soft-background)' }" style="padding: 48px 0;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
        <h3 style="margin-bottom: 24px; font-size: 16px; color: var(--text-primary); font-weight: 600;">
          Browse by Category
        </h3>

        <div style="display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px; scroll-behavior: smooth;"
             class="no-scrollbar">
          <button *ngFor="let category of categories"
                  (click)="activeCategory = category.id"
                  [ngStyle]="{ 'background-color': activeCategory === category.id ? 'var(--primary-blue)' : 'white',
                              'border': activeCategory === category.id ? 'none' : '1px solid var(--border-color)',
                              'color': activeCategory === category.id ? 'white' : 'var(--dark-navy)' }"
                  (mouseenter)="onChipHover($event, true)"
                  (mouseleave)="onChipHover($event, false)"
                  style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; height: 40px;
                         border-radius: 99px; font-size: 13px; font-weight: 500; white-space: nowrap;
                         flex-shrink: 0; cursor: pointer; transition: all 150ms; border: 1px solid var(--border-color);">
            <span style="font-size: 16px;">{{ getCategoryIcon(category.id) }}</span>
            {{ category.name }}
          </button>
        </div>
      </div>

      <style>
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      </style>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CategoryChipsComponent {
  activeCategory = 1;
  categories: Category[] = [
    { id: 1, name: 'All Tests', icon: 'test-tube' },
    { id: 2, name: 'Heart Health', icon: 'heart' },
    { id: 3, name: 'Blood Tests', icon: 'droplet' },
    { id: 4, name: 'Fitness', icon: 'activity' },
    { id: 5, name: 'General Health', icon: 'stethoscope' },
    { id: 6, name: "Women's Health", icon: 'users' },
  ];

  getCategoryIcon(categoryId: number): string {
    const icons: { [key: number]: string } = {
      1: '🧪',
      2: '❤️',
      3: '💧',
      4: '⚡',
      5: '🩺',
      6: '👥',
    };
    return icons[categoryId] || '';
  }

  onChipHover(event: MouseEvent, isHover: boolean) {
    const button = event.target as HTMLButtonElement;
    if (isHover && this.activeCategory !== parseInt(button.getAttribute('data-id') || '0')) {
      button.style.backgroundColor = 'var(--badge-bg)';
      button.style.borderColor = 'var(--primary-blue)';
    } else if (!isHover && this.activeCategory !== parseInt(button.getAttribute('data-id') || '0')) {
      button.style.backgroundColor = 'white';
      button.style.borderColor = 'var(--border-color)';
    }
  }
}
