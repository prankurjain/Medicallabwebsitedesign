import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-category-chips',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-12">
      <div class="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button
            *ngFor="let category of categories"
            class="p-4 rounded-xl transition-all duration-200 hover:shadow-md"
            [style.background-color]="category.id === activeCategory ? 'var(--primary-blue)' : 'white'"
            [style.border]="category.id === activeCategory ? 'none' : '1px solid var(--border-color)'"
            (click)="selectCategory(category.id)"
          >
            <div class="text-center">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                [style.background-color]="category.id === activeCategory ? 'rgba(255,255,255,0.2)' : 'var(--soft-background)'"
              >
                <span [style.color]="category.id === activeCategory ? 'white' : 'var(--primary-blue)'">
                  {{ category.icon }}
                </span>
              </div>
              <p
                style="font-size: 13px; font-weight: 600; margin: 0;"
                [style.color]="category.id === activeCategory ? 'white' : 'var(--text-primary)'"
              >
                {{ category.name }}
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  `,
})
export class CategoryChipsComponent {
  activeCategory = 'all';

  categories: Category[] = [
    { id: 'all', name: 'All Tests', icon: '🏥' },
    { id: 'blood', name: 'Blood Tests', icon: '🩸' },
    { id: 'hormone', name: 'Hormones', icon: '⚗️' },
    { id: 'heart', name: 'Heart', icon: '❤️' },
    { id: 'diabetes', name: 'Diabetes', icon: '🩺' },
    { id: 'liver', name: 'Liver', icon: '🔬' },
  ];

  selectCategory(categoryId: string): void {
    this.activeCategory = categoryId;
  }
}
