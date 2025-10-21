import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Filiere {
  nom: string;
  lien: string;
}

interface Formation {
  type: string;
  filieres: Filiere[];
}

interface Etablissement {
  nom: string;
  formations: Formation[];
}

@Component({
  selector: 'app-courati',
  standalone: true, 
  imports: [RouterModule, CommonModule, FormsModule, TranslateModule], 
  templateUrl: './courati.component.html',
  styleUrls: ['./courati.component.scss'] 
})
export class CouratiComponent implements OnInit {

  etablissements: Etablissement[] = [];

  private etablissementsData = [
    { 
      formations: [
        { 
          filieres: [
            { lien: 'https://drive.google.com/fsc-lic-maths' },
            { lien: 'https://drive.google.com/fsc-lic-info' }
          ]
        },
        { 
          filieres: [
            { lien: 'https://drive.google.com/fsc-master-physique' }
          ]
        }
      ]
    },
    { 
      formations: [
        { 
          filieres: [
            { lien: 'https://drive.google.com/ensa-gi' },
            { lien: 'https://drive.google.com/ensa-gc' }
          ]
        }
      ]
    },
    { 
      formations: [
        { 
          filieres: [
            { lien: 'https://drive.google.com/encg-comptabilite' },
            { lien: 'https://drive.google.com/encg-marketing' }
          ]
        }
      ]
    }
  ];

  etabChoisi: any = null;
  formationChoisie: any = null;
  filiereChoisie: any = null;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadEtablissements();
    
    // Recharger les établissements quand la langue change
    this.translate.onLangChange.subscribe(() => {
      this.loadEtablissements();
      // Réinitialiser les sélections
      this.etabChoisi = null;
      this.formationChoisie = null;
      this.filiereChoisie = null;
    });
  }

  loadEtablissements() {
    this.translate.get('courati.establishments').subscribe((translations: any[]) => {
      this.etablissements = this.etablissementsData.map((etabData, etabIndex) => {
        const etabTrans = translations[etabIndex];
        
        return {
          nom: etabTrans?.name || '',
          formations: etabData.formations.map((formData, formIndex) => {
            const formTrans = etabTrans?.formations?.[formIndex];
            
            return {
              type: formTrans?.type || '',
              filieres: formData.filieres.map((filData, filIndex) => {
                const filTrans = formTrans?.filieres?.[filIndex];
                
                return {
                  nom: filTrans?.name || '',
                  lien: filData.lien
                };
              })
            };
          })
        };
      });
    });
  }

  ouvrirDrive() {
    if (this.filiereChoisie) {
      window.open(this.filiereChoisie.lien, '_blank');
    }
  }
}