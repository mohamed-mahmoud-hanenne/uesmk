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
  { nom: 'Elhadj Hamed', poste: 'Secrétaire général', numero: '+212 606 041 737', image: 'elhadj.jpeg' },
  { nom: 'Khattary Amar Ould Baba', poste: 'Secrétaire général adjoint', numero: '+212 631 665 320', image: 'khatary.jpeg' },
  { nom: 'Eboulabass Ennahoui', poste: 'Responsable de l’information et de la formation', numero: '+222 34 65 34 34', image: 'elabass.jpeg' },
  { nom: 'Mohamed Mahmoud Hanenne', poste: 'Responsable des relations extérieures et des affaires académiques', numero: '+222 27 80 03 79', image: 'moi.jpeg' },
  { nom: 'Kaber Sidi', poste: 'Responsable des finances et des affaires sociales', numero: '+212 610 576 108', image: 'etudiant-universite.jpg' },
  { nom: 'Mariem Taleb', poste: 'Responsable de l’organisation et de la culture', numero: '+222 36 03 05 23', image: 'etudiant.webp' }
];



}
