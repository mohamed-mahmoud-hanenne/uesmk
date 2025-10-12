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
      image: 'images.jpeg',
      description: 'Tournois sportif pour étudiants mauritaniens à Kénitra.',
      details: '/activites/bienvenue-2025'
    },
    {
      titre: 'Soiré d’excellence & Eid al Adhaa',
      image: 'tournoir.jpeg',
      description: 'Soiré d’excellence & Eid al Adhaa desc. ',
      details: '/activites/football'
    },
    {
      titre: 'Kénitra Mauri League ',
      image: 'conf.jpeg',
      description: 'Kénitra Mauri League descp. ',
      details: '/activites/conference-orientation'
    },

    {
      titre: 'Fête de l’indépendance 2024',
      image: 'images.jpeg',
      description: 'Fête de l’indépendance 2024 à kénitra pour les étudiants mauritaniens.',
      details: '/activites/bienvenue-2025'
    },
    {
      titre: 'Participation au MCF par AISEC',
      image: 'tournoir.jpeg',
      description: 'Participation au MCF par AISEC descp.',
      details: '/activites/football'
    },
    {
      titre: 'Ifrane trip',
      image: 'conf.jpeg',
      description: 'Ifrane trip pour les étudiants.',
      details: '/activites/conference-orientation'
    },

    {
      titre: 'Mini CAN cesam 2025',
      image: 'conf.jpeg',
      description: 'Mini CAN cesam 2025 pour les étudiants.',
      details: '/activites/conference-orientation'
    },

    {
      titre: 'Eid al fitr 2025',
      image: 'conf.jpeg',
      description: 'Eid al fitr 2025 pour les étudiants.',
      details: '/activites/conference-orientation'
    },

        {
      titre: 'Soiré d’excellence 2ème édition & Eid al adhaa',
      image: 'conf.jpeg',
      description: 'Soiré d’excellence 2ème édition & Eid al adhaa pour les étudiants.',
      details: '/activites/conference-orientation'
    },

  ];
}
