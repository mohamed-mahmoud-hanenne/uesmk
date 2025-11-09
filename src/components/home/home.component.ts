import { AfterViewInit, Component } from '@angular/core';
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
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{
  // --- Pour les icônes dans les cartes ---
  isOpen: { [key: number]: boolean } = {};

  // --- Pour la section Événements ---
  currentIndex = 0;
  eventsPerPage = 1;

  eventsUesmk: Event[] =  []

  // --- Liste complète des événements ---
  events = [
    {
      image: 'Tournois de foot.jpeg',
      title: 'Tournois de Foot',
      description: 'Compétition sportive rassemblant les étudiants autour du fair-play et de l’esprit d’équipe.'
    },
    {
      image: 'Activité 2.jpeg',
      title: 'Activité Culturelle',
      description: 'Une activité mettant en valeur la créativité et les talents artistiques des participants.'
    },
    {
      image: 'kenitra mauri league.jpeg',
      title: 'Kenitra Mauri League',
      description: 'Tournoi interuniversitaire réunissant les étudiants mauritaniens de Kénitra.'
    },
    {
      image: 'Fête de independance.jpeg',
      title: 'Fête de l’Indépendance',
      description: 'Célébration nationale marquant l’unité et la culture mauritanienne à l’étranger.'
    },
    {
      image: 'Mcf aisec.jpeg',
      title: 'Mcf AIESEC',
      description: 'Collaboration entre associations étudiantes pour promouvoir le leadership et l’échange culturel.'
    },
    {
      image: 'Ifrane trip.jpeg',
      title: 'Voyage à Ifrane',
      description: 'Excursion universitaire pour découvrir la beauté naturelle et culturelle de la région.'
    },
    {
      image: 'Mini can cesam.jpeg',
      title: 'Mini CAN CESAM',
      description: 'Compétition amicale inspirée de la Coupe d’Afrique des Nations entre clubs étudiants.'
    },
    {
      image: 'Eid al fitr 2025.jpeg',
      title: 'Eid Al-Fitr 2025',
      description: 'Moment de partage et de convivialité pour célébrer la fin du Ramadan entre étudiants.'
    },
    {
      image: 'Soirée excellence 2025.jpeg',
      title: 'Soirée d’Excellence 2025',
      description: 'Cérémonie honorant les étudiants les plus méritants dans une ambiance festive.'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadActivites();
    this.translate.onLangChange.subscribe(() => this.loadActivites());
  }

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      const header = document.querySelector('.header-bg') as HTMLElement;
      const images = [
        'bag-uesmk.jpg',
        'uesmk2.jpeg'
      ];
      let index = 0;

      setInterval(() => {
        index = (index + 1) % images.length;
        header.style.backgroundImage = `url('${images[index]}')`;
      }, 3000);
    }
  }


  loadActivites() {
  this.translate.get('home.events.items').subscribe((translations: any[]) => {
    // Vérifie que translations est bien un tableau
    if (!Array.isArray(translations)) {
      console.warn("⚠️ Traductions des événements non valides :", translations);
      return;
    }

    // Fusionne la liste originale (images) avec les traductions disponibles
    this.eventsUesmk = this.events.map((event, index) => {
      const trans = translations[index] || {}; // si la traduction manque, on évite l'erreur

      return {
        image: event.image,
        titre: trans.title || event.title, // fallback à la valeur par défaut (français)
        description: trans.description || event.description,
      };
    });
  });
}


  // --- Images visibles (3 à la fois) ---
  get visibleEvents() {
    return this.eventsUesmk.slice(this.currentIndex, this.currentIndex + this.eventsPerPage);
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
    this.translate.get(titleKey).subscribe(title => {
      this.translate.get(sectionKey).subscribe((section: any) => {
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
}
