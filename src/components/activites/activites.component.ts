import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Activite {
  titre: string;
  image: string;
  description: string;
  details: string;
}

@Component({
  selector: 'app-activites',
  standalone: true,
  imports: [RouterLink, CommonModule, TranslateModule],
  templateUrl: './activites.component.html',
  styleUrl: './activites.component.scss',
})
export class ActivitesComponent implements OnInit {
  activites: Activite[] = [];

  private activitesData = [
    {
      image: 'Tournois de foot.jpeg',
      details: '/activites/bienvenue-2025',
    },
    {
      image: 'Activité 2.jpeg',
      details: '/activites/football',
    },
    {
      image: 'kenitra mauri league.jpeg',
      details: '/activites/conference-orientation',
    },
    {
      image: 'Fête de independance.jpeg',
      details: '/activites/bienvenue-2025',
    },
    {
      image: 'Mcf aisec.jpeg',
      details: '/activites/football',
    },
    {
      image: 'Ifrane trip.jpeg',
      details: '/activites/conference-orientation',
    },
    {
      image: 'Mini can cesam.jpeg',
      details: '/activites/conference-orientation',
    },
    {
      image: 'Eid al fitr 2025.jpeg',
      details: '/activites/conference-orientation',
    },
    {
      image: 'Soirée excellence 2025.jpeg',
      details: '/activites/conference-orientation',
    },
    {
      image: 'Ifrane trip 2.jpeg',
      details: '/activites/ifrane-trip',
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
    this.translate.get('activities.items').subscribe((translations: any[]) => {
      this.activites = this.activitesData
        .map((act, index) => ({
          titre: translations[index]?.title || '',
          description: translations[index]?.description || '',
          image: act.image,
          details: act.details,
        }))
        .reverse();
    });
  }
}