import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Etablissement {
  nom: string;
  description: string;
  lien: string;
  details: string;
}

@Component({
  selector: 'app-universite',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './universite.component.html',
  styleUrl: './universite.component.scss'
})
export class UniversiteComponent implements OnInit {
  
  etablissements: Etablissement[] = [];

  private etablissementsData = [
    {
      lien: 'https://www.uit.ac.ma/',
      details: '/details/uit'
    },
    {
      lien: 'https://ensc.uit.ac.ma/',
      details: '/details/ens'
    },
    {
      lien: 'https://est.uit.ac.ma/',
      details: '/details/ens'
    },
    {
      lien: 'https://ensa.uit.ac.ma/',
      details: '/details/ens'
    },
    {
      lien: 'https://encg.uit.ac.ma/',
      details: '/details/ens'
    },
    {
      lien: 'https://fs.uit.ac.ma/',
      details: '/details/ens'
    },
    {
      lien: 'https://flla.uit.ac.ma/',
      details: '/details/ens'
    },
    {
      lien: 'https://fshs.uit.ac.ma/',
      details: '/details/ens'
    },
    {
      lien: 'https://feg.uit.ac.ma/',
      details: '/details/ens'
    },
    {
      lien: 'https://fsjp.uit.ac.ma/',
      details: '/details/ens'
    },
    {
      lien: 'https://esef.uit.ac.ma/',
      details: '/details/ens'
    },
    {
      lien: 'https://ims.uit.ac.ma/',
      details: '/details/ens'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadEtablissements();
    
    // Recharger les établissements quand la langue change
    this.translate.onLangChange.subscribe(() => {
      this.loadEtablissements();
    });
  }

  loadEtablissements() {
    this.translate.get('universite.establishments').subscribe((translations: any[]) => {
      this.etablissements = this.etablissementsData.map((etab, index) => ({
        nom: translations[index]?.name || '',
        description: translations[index]?.description || '',
        lien: etab.lien,
        details: etab.details
      }));
    });
  }
}