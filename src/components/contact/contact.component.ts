import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  email = 'contact@uesmk.org';
  telephone = '+212600000000';
  whatsappNumber = '212600000000'; // Sans le +

  socials = [
    { name: 'Facebook', icon: 'bi bi-facebook', url: 'https://www.facebook.com/uesmk' },
    { name: 'Instagram', icon: 'bi bi-instagram', url: 'https://www.instagram.com/uesmk' },
    { name: 'TikTok', icon: 'bi bi-tiktok', url: 'https://www.tiktok.com/@uesmk' }
  ];

  openWhatsApp() {
    window.open(`https://wa.me/${this.whatsappNumber}`, '_blank');
  }
}
