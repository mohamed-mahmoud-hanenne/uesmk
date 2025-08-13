import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-universite',
  imports: [CommonModule, RouterModule],
  templateUrl: './universite.component.html',
  styleUrl: './universite.component.scss'
})
export class UniversiteComponent {

   etablissements = [
    {
      nom: 'Université Ibn Tofail',
      description: 'Université publique à Kénitra',
      lien: 'https://www.uit.ac.ma/',
      details: '/details/uit'
    },
    {
      nom: 'ENS Kénitra',
      description: 'École Normale Supérieure de Kénitra',
      lien: 'https://ensa.uit.ac.ma/',
      details: '/details/ens'
    }
  ];

}
