import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <nav
      [ngClass]="{'shadow-navigation': isScrolled}"
      [style.height.px]="70"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      [style.background-color]="isScrolled ? 'white' : 'transparent'"
    >
      <div class="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center"
            [style.background-color]="isScrolled ? 'var(--primary-blue)' : 'rgba(255,255,255,0.2)'"
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
            class="font-bold text-lg"
            [style.color]="isScrolled ? 'var(--dark-navy)' : 'white'"
            style="font-family: var(--font-sans);"
          >
            PATHKIND LAB
          </span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-9">
          <a
            *ngFor="let item of navItems"
            [href]="'#' + item.toLowerCase()"
            class="transition-colors duration-200 nav-link"
            [style.color]="isScrolled ? 'var(--dark-navy)' : 'white'"
            (mouseenter)="onNavItemHover($event, true)"
            (mouseleave)="onNavItemHover($event, false)"
            style="font-size: 15px; font-weight: 400;"
          >
            {{ item }}
          </a>
          <button
            class="px-4 transition-all duration-200"
            [style.height.px]="36"
            [style.border-radius]="'99px'"
            [style.background-color]="isScrolled ? 'var(--primary-blue)' : 'transparent'"
            [style.border]="isScrolled ? 'none' : '1px solid white'"
            style="color: white; font-size: 14px; font-weight: 500;"
          >
            My Account
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden"
          (click)="toggleMobileMenu()"
          [style.color]="isScrolled ? 'var(--dark-navy)' : 'white'"
        >
          <lucide-icon *ngIf="!isMobileMenuOpen" [img]="menuIcon" [size]="24" stroke-width="2"></lucide-icon>
          <lucide-icon *ngIf="isMobileMenuOpen" [img]="closeIcon" [size]="24"></lucide-icon>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Drawer -->
    <div *ngIf="isMobileMenuOpen" class="mobile-menu-container">
      <div
        class="fixed inset-0 bg-black/50 z-40"
        (click)="toggleMobileMenu()"
      ></div>
      <div
        class="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 p-6 flex flex-col mobile-drawer"
      >
        <button
          class="self-end mb-8"
          (click)="toggleMobileMenu()"
          [style.color]="'var(--dark-navy)'"
        >
          <lucide-icon [img]="closeIcon" [size]="24"></lucide-icon>
        </button>
        <a
          *ngFor="let item of navItems"
          [href]="'#' + item.toLowerCase()"
          class="py-4 border-b"
          [style.color]="'var(--dark-navy)'"
          [style.border-color]="'var(--border-color)'"
          style="font-size: 15px;"
          (click)="toggleMobileMenu()"
        >
          {{ item }}
        </a>
        <a
          href="#account"
          class="py-4 border-b"
          [style.color]="'var(--dark-navy)'"
          [style.border-color]="'var(--border-color)'"
          style="font-size: 15px;"
          (click)="toggleMobileMenu()"
        >
          My Account
        </a>
      </div>
    </div>

    <style>
      .shadow-navigation {
        box-shadow: 0 2px 16px rgba(13, 43, 78, 0.08);
      }

      @keyframes slideIn {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }

      .mobile-drawer {
        animation: slideIn 200ms ease-out;
      }

      .nav-link {
        position: relative;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--teal-accent);
        transition: width 0.3s ease;
      }

      .nav-link:hover::after {
        width: 100%;
      }
    </style>
  `,
})
export class NavigationComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  navItems = ['Tests', 'Packages', 'Contact'];
  menuIcon = Menu;
  closeIcon = X;
  private scrollListener: any;

  ngOnInit(): void {
    this.scrollListener = () => {
      this.isScrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onNavItemHover(event: MouseEvent, isHovering: boolean): void {
    const link = event.currentTarget as HTMLElement;
    if (isHovering) {
      link.style.color = 'var(--teal-accent)';
    } else {
      link.style.color = this.isScrolled ? 'var(--dark-navy)' : 'white';
    }
  }
}
