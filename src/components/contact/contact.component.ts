import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  email = 'Uesmmk@gmail.com';
  telephone = '+212606041737';
  whatsappNumber = '+212606041737'; // Sans le +

  socials = [
    { name: 'Facebook', icon: 'bi bi-facebook', url: 'https://www.facebook.com/profile.php?id=61559168396331' },
    { name: 'Instagram', icon: 'bi bi-instagram', url: 'https://www.instagram.com/uesmk' },
    { name: 'TikTok', icon: 'bi bi-tiktok', url: 'https://www.tiktok.com/@uesm.k?is_from_webapp=1&sender_device=pc' }
  ];

  openWhatsApp() {
    window.open(`https://wa.me/${this.whatsappNumber}`, '_blank');
  }
}
