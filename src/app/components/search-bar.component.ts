import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { Search } from 'lucide-angular';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <section
      class="py-12 relative z-10"
      style="background-color: var(--soft-background); transform: translateY(-40px);"
    >
      <div class="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div
          class="rounded-2xl p-8 md:p-10 shadow-lg"
          style="background-color: white; border: 1px solid var(--border-color);"
        >
          <div class="flex flex-col md:flex-row gap-4 items-end">
            <!-- Search Input -->
            <div class="flex-1">
              <label
                style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;"
              >
                Search Tests & Packages
              </label>
              <div class="relative">
                <input
                  [(ngModel)]="searchQuery"
                  type="text"
                  placeholder="Blood test, Heart health, Diabetes..."
                  class="w-full px-4 py-3 rounded-lg transition-all duration-200"
                  style="background-color: var(--soft-background); border: 1px solid var(--border-color); color: var(--text-primary); font-size: 14px;"
                  (focus)="onSearchFocus($event)"
                  (blur)="onSearchBlur($event)"
                />
                <lucide-icon
                  [img]="searchIcon"
                  [size]="18"
                  style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: var(--text-secondary);"
                ></lucide-icon>
              </div>
            </div>

            <!-- Category Filter -->
            <div class="flex-1 md:w-auto">
              <label
                style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;"
              >
                Category
              </label>
              <select
                [(ngModel)]="selectedCategory"
                class="w-full md:w-48 px-4 py-3 rounded-lg transition-all duration-200"
                style="background-color: var(--soft-background); border: 1px solid var(--border-color); color: var(--text-primary); font-size: 14px;"
              >
                <option value="">All Categories</option>
                <option value="blood">Blood Tests</option>
                <option value="hormone">Hormone Tests</option>
                <option value="heart">Heart Health</option>
                <option value="diabetes">Diabetes</option>
              </select>
            </div>

            <!-- Search Button -->
            <button
              class="w-full md:w-auto px-6 py-3 transition-all duration-200 hover:scale-105"
              style="background-color: var(--primary-blue); color: white; border-radius: 8px; font-size: 14px; font-weight: 600; height: 44px;"
              (click)="onSearch()"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SearchBarComponent {
  searchQuery = '';
  selectedCategory = '';
  searchIcon = Search;

  onSearch(): void {
    console.log('Search:', this.searchQuery, this.selectedCategory);
  }

  onSearchFocus(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    target.style.borderColor = 'var(--primary-blue)';
    target.style.backgroundColor = 'white';
  }

  onSearchBlur(event: FocusEvent): void {
    const target = event.target as HTMLInputElement;
    target.style.borderColor = 'var(--border-color)';
    target.style.backgroundColor = 'var(--soft-background)';
  }
}
