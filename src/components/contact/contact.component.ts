import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  email = 'uesmmk@gmail.com';
  telephone = '+212 603 838 874';
  whatsappNumber = '+22227800379'; // Sans le +

  socials = [
    { name: 'Facebook', icon: 'bi bi-facebook', url: 'https://www.facebook.com/share/178zjRNZmS/?mibextid=wwXIfr' },
    { name: 'Instagram', icon: 'bi bi-instagram', url: 'https://www.instagram.com/uesm.k?igsh=Y3V1Zjg2Y2UwaThl&utm_source=qr' },
    { name: 'TikTok', icon: 'bi bi-tiktok', url: 'https://www.tiktok.com/@uesm.k?_t=ZM-90T23KsaaSq&_r=1' },
    { name: 'Linkedin', icon: 'bi bi-linkedin', url: 'https://www.linkedin.com/company/uesmk' },
    { name: 'Snapchat', icon: 'bi bi-snapchat', url: 'https://snapchat.com/t/ABkMqvCj' },
  ];

  openWhatsApp() {
    window.open(`https://wa.me/${this.whatsappNumber}`, '_blank');
  }
}
