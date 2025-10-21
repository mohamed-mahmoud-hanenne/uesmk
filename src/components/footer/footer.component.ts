import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  socialLinks = [
    { 
      url: 'https://www.facebook.com/share/178zjRNZmS/?mibextid=wwXIfr', 
      icon: 'fab fa-facebook-f',
      name: 'Facebook'
    },
    { 
      url: 'https://twitter.com/uesmk', 
      icon: 'fab fa-twitter',
      name: 'Twitter'
    },
    { 
      url: 'https://www.instagram.com/uesm.k?igsh=Y3V1Zjg2Y2UwaThl&utm_source=qr', 
      icon: 'fab fa-instagram',
      name: 'Instagram'
    },
    { 
      url: 'https://www.linkedin.com/company/uesmk', 
      icon: 'fab fa-linkedin',
      name: 'LinkedIn'
    }
  ];



  //   allImages = [
  //   'Tournois de foot.jpeg',
  //   'Activité 2.jpeg',
  //   'kenitra mauri league.jpeg',
  //   'Fête de l’indépendance.jpeg',
  //   'Mcf aisec.jpeg',
  //   'Ifrane trip.jpeg',
  //   'Mini can cesam.jpeg',
  //   'Eid al fitr 2025.jpeg',
  //   'Soirée d’excellence 2025.jpeg'
  // ];
}