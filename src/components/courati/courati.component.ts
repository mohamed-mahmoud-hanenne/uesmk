import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courati',
  standalone: true, // ✅ obligatoire pour pouvoir mettre imports ici
  imports: [RouterModule, CommonModule, FormsModule], // ✅ FormsModule pour ngModel/ngValue
  templateUrl: './courati.component.html',
  styleUrls: ['./courati.component.scss'] // ✅ avec un "s"
})
export class CouratiComponent {

  etablissements = [
    { nom: 'Faculté des Sciences', formations: [
      { type: 'Licence', filieres: [
        { nom: 'Mathématiques', lien: 'https://drive.google.com/fsc-lic-maths' },
        { nom: 'Informatique', lien: 'https://drive.google.com/fsc-lic-info' }
      ]},
      { type: 'Master', filieres: [
        { nom: 'Physique', lien: 'https://drive.google.com/fsc-master-physique' }
      ]}
    ]},
    { nom: 'École Nationale des Sciences Appliquées (ENSA)', formations: [
      { type: 'Prepa', filieres: [
        { nom: 'Génie Informatique', lien: 'https://drive.google.com/ensa-gi' },
        { nom: 'Génie Civil', lien: 'https://drive.google.com/ensa-gc' }
      ]}
    ]},

        { nom: 'École Nationale de Commerce et de Gestion (ENCG)', formations: [
      { type: 'Prepa', filieres: [
        { nom: 'Comptabilite', lien: 'https://drive.google.com/ensa-gi' },
        { nom: 'Marketing', lien: 'https://drive.google.com/ensa-gc' }
      ]},
      
    ]}
  ];

  etabChoisi: any = null;
  formationChoisie: any = null;
  filiereChoisie: any = null;

  ouvrirDrive() {
    if (this.filiereChoisie) {
      window.open(this.filiereChoisie.lien, '_blank');
    }
  }
}
