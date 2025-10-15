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
      L’Union des Étudiants et Stagiaires Mauritaniens (UESM) est une organisation estudiantine
      créée en 1997 à Rabat. Elle a pour mission principale d’accompagner les étudiants et stagiaires
      mauritaniens dans leur parcours académique et social au Maroc, en favorisant leur intégration,
      en défendant leurs intérêts et en organisant diverses activités scientifiques, culturelles et
      associatives.
      Afin de rapprocher ses actions des étudiants, l’Union est structurée en sections locales dans
      plusieurs villes universitaires marocaines. La section de Kénitra, fondée il y a plus de treize
      ans, poursuit les mêmes missions et incarne les mêmes valeurs que l’Union centrale, tout en
      les adaptant aux besoins spécifiques des étudiants et stagiaires mauritaniens installés dans la
      ville de Kénitra.
  `;

equipe = [
  { nom: 'Elhadj Hamed', poste: 'Secrétaire général', numero: '+212 606 041 737', image: 'elhadj.jpeg' },
  { nom: 'Khattary Amar Ould Baba', poste: 'Secrétaire général adjoint', numero: '+212 631 665 320', image: 'khatary.jpeg' },
  { nom: 'Eboulabass Ennahoui', poste: 'Responsable de l’information et de la formation', numero: '+222 34 65 34 34', image: 'elabass.jpeg' },
  { nom: 'Mohamed Mahmoud Hanenne', poste: 'Responsable des relations extérieures et des affaires académiques', numero: '+222 27 80 03 79', image: 'moi.jpeg' },
  { nom: 'Kaber Sidi', poste: 'Responsable des finances et des affaires sociales', numero: '+212 610 576 108', image: 'kaber.png' },
  { nom: 'Mariem Taleb', poste: 'Responsable de l’organisation et de la culture', numero: '+212 653 821 475', image: 'Mariem.jpeg' }
];



}
