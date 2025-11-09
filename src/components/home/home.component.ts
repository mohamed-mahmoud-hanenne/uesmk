import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

interface Event {
  image: string;
  titre: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // --- Pour les icônes dans les cartes ---
  isOpen: { [key: number]: boolean } = {};

  // --- Pour la section Événements ---
  currentIndex = 0;
  eventsPerPage = 2;

  eventsUesmk: Event[] = [];

  // --- Liste complète des événements ---
  events = [
    {
      image: 'Tournois de foot.jpeg',
    },
    {
      image: 'Activité 2.jpeg',
    },
    {
      image: 'kenitra mauri league.jpeg',
    },
    {
      image: 'Fête de independance.jpeg',
    },
    {
      image: 'Mcf aisec.jpeg',
    },
    {
      image: 'Ifrane trip.jpeg',
    },
    {
      image: 'Mini can cesam.jpeg',
    },
    {
      image: 'Eid al fitr 2025.jpeg',
    },
    {
      image: 'Soirée excellence 2025.jpeg',
    },
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadActivites();

    // Recharger les activités quand la langue change
    this.translate.onLangChange.subscribe(() => {
      this.loadActivites();
    });
  }

  loadActivites() {
    this.translate.get('home.events.items').subscribe((translations: any[]) => {
      this.eventsUesmk = this.events.map((act, index) => ({
        titre: translations[index]?.title || '',
        description: translations[index]?.description || '',
        image: act.image,
      }));
    });
  }

  // --- Images visibles (3 à la fois) ---
  get visibleEvents() {
    return this.eventsUesmk.slice(
      this.currentIndex,
      this.currentIndex + this.eventsPerPage
    );
  }

  // --- Navigation ---
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
    return this.currentIndex + this.eventsPerPage >= this.events.length;
  }

  // --- Gestion des erreurs d’image ---
  onImgError(event: any) {
    event.target.src = 'assets/images/bag-uesmk.jpg';
  }

  // --- Pour les popups avec SweetAlert2 ---
  showList(titleKey: string, sectionKey: string) {
    this.translate.get(titleKey).subscribe((title) => {
      this.translate.get(sectionKey).subscribe((section: any) => {
        const items = Object.keys(section)
          .filter((key) => key.startsWith('doc'))
          .map((key) => section[key]);

        const htmlList = `
          <ul style="text-align: left; font-size: 0.95rem; line-height: 1.6; margin-left: 10px;">
            ${items
              .map(
                (i) =>
                  `<p style="margin-bottom: 8px;"><i class='bi bi-check-circle-fill text-success me-2'></i>${i}</p>`
              )
              .join('')}
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
          hideClass: { popup: 'animate__animated animate__fadeOutUp' },
        });
      });
    });
  }

  toggleIcon(cardNumber: number) {
    this.isOpen[cardNumber] = !this.isOpen[cardNumber];
  }
}
