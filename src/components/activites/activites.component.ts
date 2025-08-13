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
      titre: 'Cérémonie de bienvenue 2025',
      image: 'images.jpeg',
      description: 'Accueil des nouveaux étudiants mauritaniens à Kénitra.',
      details: '/activites/bienvenue-2025'
    },
    {
      titre: 'Tournoi de football UESMK',
      image: 'tournoir.jpeg',
      description: 'Compétition sportive entre les étudiants mauritaniens.',
      details: '/activites/football'
    },
    {
      titre: 'Conférence sur l’orientation académique',
      image: 'conf.jpeg',
      description: 'Session d’orientation et d’information pour les étudiants.',
      details: '/activites/conference-orientation'
    },

    {
      titre: 'Cérémonie de bienvenue 2025',
      image: 'images.jpeg',
      description: 'Accueil des nouveaux étudiants mauritaniens à Kénitra.',
      details: '/activites/bienvenue-2025'
    },
    {
      titre: 'Tournoi de football UESMK',
      image: 'tournoir.jpeg',
      description: 'Compétition sportive entre les étudiants mauritaniens.',
      details: '/activites/football'
    },
    {
      titre: 'Conférence sur l’orientation académique',
      image: 'conf.jpeg',
      description: 'Session d’orientation et d’information pour les étudiants.',
      details: '/activites/conference-orientation'
    }
  ];
}
