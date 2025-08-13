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
      nom: 'ENSC Ecole Nationale Supérieure de Chimie Kénitra',
      description: 'ENSC Kénitra',
      lien: 'https://ensc.uit.ac.ma/',
      details: '/details/ens'
    },

        {
      nom: 'EST Kénitra',
      description: 'École Supérieure de Technologie de Kénitra',
      lien: 'https://est.uit.ac.ma/',
      details: '/details/ens'
    }, 

    
        {
      nom: 'ENSA École Nationale des Sciences Appliquées de Kénitra',
      description: 'ENSA Kénitra',
      lien: 'https://ensa.uit.ac.ma/',
      details: '/details/ens'
    }, 


            {
      nom: 'ENCG École Nationale de Commerce et de Gestion de Kénitra',
      description: 'ENSG Kénitra',
      lien: 'https://encg.uit.ac.ma/',
      details: '/details/ens'
    }, 

                {
      nom: 'FS Faculté des Sciences de Kénitra',
      description: 'FS Kénitra',
      lien: 'https://fs.uit.ac.ma/',
      details: '/details/ens'
    }, 


    
  ];

}
