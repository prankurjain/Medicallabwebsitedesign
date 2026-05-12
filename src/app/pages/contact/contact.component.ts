import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `<div class="page"><mat-card><mat-card-title>Contact Us</mat-card-title><mat-card-content><p>Phone, email and address details.</p></mat-card-content></mat-card></div>`,
  styles: [`.page{max-width:1100px;margin:96px auto 40px;padding:0 16px}`]
})
export class ContactComponent {}
