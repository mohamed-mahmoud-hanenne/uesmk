import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-activites',
  imports: [RouterLink, CommonModule],
  templateUrl: './activites.component.html',
  styleUrl: './activites.component.scss'
})
export class ActivitesComponent {

   activites = [
    {
      titre: 'Tournois sportif',
      image: 'Tournois de foot.jpeg',
      description: 'Tournois sportif pour étudiants mauritaniens à Kénitra.',
      details: '/activites/bienvenue-2025'
    },
    {
      titre: 'Soiré d’excellence & Eid al Adhaa',
      image: 'Activité 2.jpeg',
      description: 'Soiré d’excellence & Eid al Adhaa desc. ',
      details: '/activites/football'
    },
    {
      titre: 'Kénitra Mauri League ',
      image: 'kenitra mauri league.jpeg',
      description: 'Kénitra Mauri League descp. ',
      details: '/activites/conference-orientation'
    },

    {
      titre: 'Fête de l’indépendance 2024',
      image: 'Fête de l’indépendance.jpeg',
      description: 'Fête de l’indépendance 2024 à kénitra pour les étudiants mauritaniens.',
      details: '/activites/bienvenue-2025'
    },
    {
      titre: 'Participation au MCF par AISEC',
      image: 'Mcf aisec.jpeg',
      description: 'Participation au MCF par AISEC descp.',
      details: '/activites/football'
    },
    {
      titre: 'Ifrane trip',
      image: 'Ifrane trip.jpeg',
      description: 'Ifrane trip pour les étudiants.',
      details: '/activites/conference-orientation'
    },

    {
      titre: 'Mini CAN cesam 2025',
      image: 'Mini can cesam.jpeg',
      description: 'Mini CAN cesam 2025 pour les étudiants.',
      details: '/activites/conference-orientation'
    },

    {
      titre: 'Eid al fitr 2025',
      image: 'Eid al fitr 2025.jpeg',
      description: 'Eid al fitr 2025 pour les étudiants.',
      details: '/activites/conference-orientation'
    },

        {
      titre: 'Soiré d’excellence 2ème édition & Eid al adhaa',
      image: 'Soirée d’excellence 2025.jpeg',
      description: 'Soiré d’excellence 2ème édition & Eid al adhaa pour les étudiants.',
      details: '/activites/conference-orientation'
    },

  ];
}
