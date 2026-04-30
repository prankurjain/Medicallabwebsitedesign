import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
      style="background-color: var(--whatsapp-green); color: white;"
      title="Chat with us on WhatsApp"
    >
      <lucide-icon [img]="whatsappIcon" [size]="24"></lucide-icon>
    </a>
  `,
})
export class WhatsAppFabComponent {
  whatsappIcon = MessageCircle;
}
