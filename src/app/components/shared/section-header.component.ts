import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngStyle]="{ 'text-align': align === 'center' ? 'center' : 'left',
                      'display': viewAllLink ? 'flex' : 'block',
                      'justify-content': viewAllLink ? 'space-between' : 'auto',
                      'align-items': viewAllLink ? 'flex-start' : 'auto' }"
         style="margin-bottom: 32px;">
      
      <div [ngStyle]="{ 'margin': align === 'center' ? '0 auto' : '0',
                       'max-width': align === 'center' ? '560px' : 'auto' }">
        
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;"
             [ngStyle]="{ 'justify-content': align === 'center' ? 'center' : 'flex-start' }">
          <div style="width: 32px; height: 2px; background-color: var(--teal-accent);" />
          <span style="font-size: 11px; font-family: var(--font-mono); text-transform: uppercase;
                       letter-spacing: 0.1em; color: var(--primary-blue); font-weight: 500;">
            {{ label }}
          </span>
        </div>

        <h2 style="font-size: clamp(28px, 4vw, 32px); font-family: var(--font-sans); font-weight: 700;
                   color: var(--dark-navy); margin-bottom: 8px;">
          {{ title }}
        </h2>

        <p *ngIf="subtitle"
           style="font-size: 16px; color: var(--text-secondary); line-height: 1.6;">
          {{ subtitle }}
        </p>
      </div>

      <a *ngIf="viewAllLink"
         href="#all-tests"
         style="font-size: 14px; color: var(--primary-blue); font-weight: 500; white-space: nowrap;
                 text-decoration: none; transition: text-decoration 200ms; cursor: pointer;">
        View All Tests →
      </a>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SectionHeaderComponent {
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() align: 'left' | 'center' = 'left';
  @Input() viewAllLink: boolean = false;
}
