import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav
      [ngStyle]="{ 'background-color': isScrolled ? 'white' : 'transparent',
                   'box-shadow': isScrolled ? '0 2px 16px rgba(13,43,78,0.08)' : 'none',
                   'transition': 'all 200ms ease' }"
      style="position: fixed; top: 0; left: 0; right: 0; z-index: 50; height: 70px;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px; height: 100%; display: flex; align-items: center; justify-content: space-between;">
        
        <!-- Logo -->
        <a routerLink="/" style="display: flex; align-items: center; gap: 12px; text-decoration: none;">
          <div [ngStyle]="{ 'background-color': isScrolled ? 'var(--primary-blue)' : 'rgba(255,255,255,0.2)' }"
               style="width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 22V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span [ngStyle]="{ 'color': isScrolled ? 'var(--dark-navy)' : 'white' }"
                style="font-weight: bold; font-size: 18px;">PATHKIND LAB</span>
        </a>

        <!-- Desktop Navigation -->
        <div style="display: none; gap: 36px; align-items: center;"
             [ngStyle]="{ 'display': 'flex' }" class="md-nav">
          <a routerLink="/#tests"
             [ngStyle]="{ 'color': isScrolled ? 'var(--dark-navy)' : 'white' }"
             (mouseenter)="onNavLinkHover($event, true)"
             (mouseleave)="onNavLinkHover($event, false)"
             style="text-decoration: none; transition: color 200ms; font-size: 15px; font-weight: 400;">
            Tests
          </a>
          <a routerLink="/#packages"
             [ngStyle]="{ 'color': isScrolled ? 'var(--dark-navy)' : 'white' }"
             (mouseenter)="onNavLinkHover($event, true)"
             (mouseleave)="onNavLinkHover($event, false)"
             style="text-decoration: none; transition: color 200ms; font-size: 15px; font-weight: 400;">
            Packages
          </a>
          <a routerLink="/contact"
             [ngStyle]="{ 'color': isScrolled ? 'var(--dark-navy)' : 'white' }"
             (mouseenter)="onNavLinkHover($event, true)"
             (mouseleave)="onNavLinkHover($event, false)"
             style="text-decoration: none; transition: color 200ms; font-size: 15px; font-weight: 400;">
            Contact
          </a>
          <button (click)="goToLogin()"
                  [ngStyle]="{ 'background-color': isScrolled ? 'var(--primary-blue)' : 'transparent',
                              'border': isScrolled ? 'none' : '1px solid white',
                              'color': 'white' }"
                  style="height: 36px; border-radius: 99px; padding: 0 16px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 200ms;">
            My Account
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button (click)="toggleMobileMenu()"
                [ngStyle]="{ 'color': isScrolled ? 'var(--dark-navy)' : 'white' }"
                style="display: flex; align-items: center; justify-content: center; border: none; background: none; cursor: pointer; font-size: 24px;">
          <span *ngIf="!isMobileMenuOpen">☰</span>
          <span *ngIf="isMobileMenuOpen">✕</span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay & Drawer -->
    <div *ngIf="isMobileMenuOpen"
         (click)="toggleMobileMenu()"
         style="position: fixed; inset: 0; background-color: rgba(0,0,0,0.5); z-index: 40;">
    </div>
    <div *ngIf="isMobileMenuOpen"
         style="position: fixed; top: 0; right: 0; bottom: 0; width: 256px; background-color: white; z-index: 50; padding: 24px; display: flex; flex-direction: column; animation: slideIn 200ms ease-out;">
      <button (click)="toggleMobileMenu()"
              style="align-self: flex-end; margin-bottom: 32px; border: none; background: none; cursor: pointer; color: var(--dark-navy); font-size: 24px;">
        ✕
      </button>
      <a routerLink="/#tests"
         (click)="toggleMobileMenu()"
         style="padding: 16px 0; border-bottom: 1px solid var(--border-color); color: var(--dark-navy); text-decoration: none; font-size: 15px;">
        Tests
      </a>
      <a routerLink="/#packages"
         (click)="toggleMobileMenu()"
         style="padding: 16px 0; border-bottom: 1px solid var(--border-color); color: var(--dark-navy); text-decoration: none; font-size: 15px;">
        Packages
      </a>
      <a routerLink="/contact"
         (click)="toggleMobileMenu()"
         style="padding: 16px 0; border-bottom: 1px solid var(--border-color); color: var(--dark-navy); text-decoration: none; font-size: 15px;">
        Contact
      </a>
      <a routerLink="/login"
         (click)="toggleMobileMenu()"
         style="padding: 16px 0; border-bottom: 1px solid var(--border-color); color: var(--dark-navy); text-decoration: none; font-size: 15px;">
        My Account
      </a>
    </div>

    <style>
      @keyframes slideIn {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }

      @media (min-width: 768px) {
        .md-nav {
          display: flex !important;
        }
      }
    </style>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NavigationComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  private scrollListener: (() => void) | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.scrollListener = () => {
      this.isScrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onNavLinkHover(event: MouseEvent, isHover: boolean) {
    const element = event.target as HTMLElement;
    if (isHover) {
      element.style.color = 'var(--teal-accent)';
    } else {
      element.style.color = this.isScrolled ? 'var(--dark-navy)' : 'white';
    }
  }
}
