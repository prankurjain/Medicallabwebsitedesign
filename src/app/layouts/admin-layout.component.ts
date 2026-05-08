import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  template: `
    <div style="display: flex; min-height: 100vh;">
      <!-- Sidebar -->
      <aside style="width: 240px; flex-shrink: 0; display: flex; flex-direction: column;
                    background-color: var(--dark-navy);" class="admin-sidebar">
        <!-- Logo -->
        <div style="padding: 24px; border-bottom: 1px solid #1A3D63;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background-color: rgba(255,255,255,0.1);
                        display: flex; align-items: center; justify-content: center;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span style="color: white; font-size: 20px; font-weight: bold;">PATHKIND</span>
          </div>
        </div>

        <!-- Navigation -->
        <nav style="flex: 1; padding: 16px; display: flex; flex-direction: column; gap: 8px;">
          <a *ngFor="let item of navItems"
             [routerLink]="item.path"
             routerLinkActive="nav-active"
             [routerLinkActiveOptions]="{ exact: item.path === '/admin' }"
             style="display: flex; align-items: center; gap: 12px; padding: 0 16px;
                    height: 48px; color: var(--soft-blue-white); font-size: 14px; font-weight: 500;
                    border-radius: 8px; text-decoration: none; transition: all 200ms; position: relative;">
            <span [innerHTML]="getIcon(item.icon)" style="display: flex; align-items: center;"></span>
            {{ item.label }}
          </a>
        </nav>

        <!-- Logout -->
        <div style="padding: 16px; border-top: 1px solid #1A3D63;">
          <a routerLink="/admin/login"
             style="display: flex; align-items: center; gap: 12px; padding: 0 16px;
                    height: 48px; color: var(--soft-blue-white); font-size: 14px; font-weight: 500;
                    border-radius: 8px; text-decoration: none; transition: background-color 200ms;"
             (mouseenter)="onLogoutHover($event, true)"
             (mouseleave)="onLogoutHover($event, false)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </a>
        </div>
      </aside>

      <!-- Main Content -->
      <div style="flex: 1; display: flex; flex-direction: column; min-width: 0;">
        <!-- Top Bar -->
        <header style="background-color: white; border-bottom: 1px solid var(--border-color);
                       height: 64px; display: flex; align-items: center; padding: 0 24px; flex-shrink: 0;">
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
            <h1 style="font-size: 18px; font-weight: 600; color: var(--dark-navy);">Admin Panel</h1>

            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--primary-blue);
                          display: flex; align-items: center; justify-content: center;
                          color: white; font-size: 14px; font-weight: 700;">
                AD
              </div>
              <p style="font-size: 14px; font-weight: 600; color: var(--dark-navy);">Admin User</p>
            </div>
          </div>
        </header>

        <!-- Page Content -->
        <main style="flex: 1; overflow: auto; background-color: var(--soft-background);">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>

    <style>
      .nav-active {
        background-color: rgba(255,255,255,0.1) !important;
        color: white !important;
      }
      .nav-active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        border-radius: 0 4px 4px 0;
        background-color: var(--teal-accent);
      }
      @media (max-width: 768px) {
        .admin-sidebar {
          display: none !important;
        }
      }
    </style>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class AdminLayoutComponent {
  navItems: NavItem[] = [
    { path: '/admin', label: 'Dashboard', icon: 'dashboard' },
    { path: '/admin/tests', label: 'Tests', icon: 'test-tube' },
    { path: '/admin/packages', label: 'Packages', icon: 'package' },
    { path: '/admin/bookings', label: 'Bookings', icon: 'calendar' },
  ];

  getIcon(icon: string): string {
    const icons: Record<string, string> = {
      dashboard: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
      'test-tube': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`,
      package: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
      calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    };
    return icons[icon] || '';
  }

  onLogoutHover(event: MouseEvent, isHover: boolean) {
    const el = event.currentTarget as HTMLElement;
    el.style.backgroundColor = isHover ? 'rgba(255,255,255,0.1)' : 'transparent';
  }
}
