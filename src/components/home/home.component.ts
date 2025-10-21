import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isOpen: { [key: number]: boolean } = {};
  currentIndex = 0;
  imagesPerPage = 2;
  
    allImages = [
    'Tournois de foot.jpeg',
    'Activité 2.jpeg',
    'kenitra mauri league.jpeg',
    'Fête de l’indépendance.jpeg',
    'Mcf aisec.jpeg',
    'Ifrane trip.jpeg',
    'Mini can cesam.jpeg',
    'Eid al fitr 2025.jpeg',
    'Soirée d’excellence 2025.jpeg'
  ];

  constructor(private translate: TranslateService) {}

  get visibleImages() {
    return this.allImages.slice(this.currentIndex, this.currentIndex + this.imagesPerPage);
  }

showList(titleKey: string, sectionKey: string) {
  // Récupérer le titre traduit
  this.translate.get(titleKey).subscribe(title => {
    // Récupérer toute la section
    this.translate.get(sectionKey).subscribe((section: any) => {
      // Extraire seulement les clés qui commencent par "doc"
      const items = Object.keys(section)
        .filter(key => key.startsWith('doc'))
        .map(key => section[key]);
      
      const htmlList = `
        <ul style="text-align: left; font-size: 0.95rem; line-height: 1.6; margin-left: 10px;">
          ${items.map(i => `<p style="margin-bottom: 8px;"><i class='bi bi-check-circle-fill text-success me-2'></i>${i}</p>`).join('')}
        </ul>
      `;

      Swal.fire({
        title: `<h4 style="color:#155724; font-weight:700;">${title}</h4>`,
        html: htmlList,
        background: '#f9fdf9',
        confirmButtonText: this.translate.instant('documents.btnClose'),
        confirmButtonColor: '#28a745',
        width: '42em',
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' }
      });
    });
  });
}

  toggleIcon(cardNumber: number) {
    this.isOpen[cardNumber] = !this.isOpen[cardNumber];
  }

  next() {
    if (!this.isNextDisabled()) {
      this.currentIndex++;
    }
  }

  prev() {
    if (!this.isPrevDisabled()) {
      this.currentIndex--;
    }
  }

  isPrevDisabled() {
    return this.currentIndex === 0;
  }

  isNextDisabled() {
    return this.currentIndex + this.imagesPerPage >= this.allImages.length;
  }

  onImgError(event: any) {
    event.target.src = 'assets/placeholder.jpg';
  }
}