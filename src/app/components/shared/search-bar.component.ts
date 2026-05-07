import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding: 48px 0; background-color: white;">
      <div style="max-width: 1280px; margin: 0 auto; padding: 0 20px;">
        <div style="max-width: 720px; margin: 0 auto;">
          <div style="position: relative;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" stroke-width="2"
                 style="position: absolute; left: 24px; top: 50%; transform: translateY(-50%);">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text"
                   placeholder="Search for a test or package..."
                   (focus)="onInputFocus($event)"
                   (blur)="onInputBlur($event)"
                   style="width: 100%; padding-left: 64px; padding-right: 24px; height: 64px; border-radius: 32px;
                          border: 1px solid var(--border-color); font-size: 16px; color: var(--text-primary);
                          box-shadow: 0 4px 24px rgba(26,111,191,0.12); transition: all 200ms;
                          outline: none; box-sizing: border-box;" />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SearchBarComponent {
  onInputFocus(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    input.style.border = '2px solid var(--primary-blue)';
    input.style.boxShadow = '0 4px 32px rgba(26,111,191,0.18)';
  }

  onInputBlur(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    input.style.border = '1px solid var(--border-color)';
    input.style.boxShadow = '0 4px 24px rgba(26,111,191,0.12)';
  }
}
