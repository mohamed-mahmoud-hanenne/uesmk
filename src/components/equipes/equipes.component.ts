import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipes',
  imports: [CommonModule],
  templateUrl: './equipes.component.html',
  styleUrl: './equipes.component.scss'
})
export class EquipesComponent {

   description = `
    L'Union des Étudiants et Stagiaires Mauritaniens à Kénitra (UESMK) est une organisation
    qui a pour mission de représenter, soutenir et rassembler les étudiants et stagiaires
    mauritaniens vivant à Kénitra. Nous organisons des événements culturels, éducatifs et
    sportifs afin de renforcer la solidarité et favoriser l'intégration.
  `;

equipe = [
  { nom: 'Mohamed Ahmed', poste: 'Président', numero: '+212 6 12 34 56 78', image: 'equipe.png' },
  { nom: 'Fatoumata Sow', poste: 'Vice-présidente', numero: '+212 6 98 76 54 32', image: 'etudiant-universite.jpg' },
  { nom: 'Abdallah Ould', poste: 'Secrétaire Général', numero: '+212 6 23 45 67 89', image: 'etudiant.webp' },
  { nom: 'Mariam Mint', poste: 'Trésorière', numero: '+212 6 87 65 43 21', image: 'equipe.png' },
  { nom: 'Cheikh Oumar', poste: 'Responsable Communication', numero: '+212 6 11 22 33 44', image: 'etudiant-universite.jpg' },
  { nom: 'Aïcha Mint', poste: 'Responsable Événements', numero: '+212 6 55 44 33 22', image: 'etudiant.webp' },
  { nom: 'Ismail Ould', poste: 'Responsable Logistique', numero: '+212 6 77 88 99 00', image: 'equipe.png' },
];



}
