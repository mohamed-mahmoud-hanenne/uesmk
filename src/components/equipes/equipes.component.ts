import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Membre {
  nom: string;
  poste: string;
  numero: string;
  image: string;
}

@Component({
  selector: 'app-equipes',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './equipes.component.html',
  styleUrl: './equipes.component.scss'
})
export class EquipesComponent implements OnInit {

  description: string = '';
  equipe: Membre[] = [];

  private equipeData = [
    { numero: '212606041737+', image: 'elhadj.jpeg' },
    { numero: '212631665320+', image: 'khatary.jpeg' },
    { numero: '22234653434+', image: 'elabass.jpeg' },
    { numero: '22227800379+', image: 'moi.jpeg' },
    { numero: '212610576108+', image: 'kaber.png' },
    { numero: '212653821475+', image: 'Mariem.jpeg' }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadContent();
    
    // Recharger le contenu quand la langue change
    this.translate.onLangChange.subscribe(() => {
      this.loadContent();
    });
  }

  loadContent() {
    // Charger la description
    this.translate.get('team.description').subscribe((desc: string) => {
      this.description = desc;
    });

    // Charger les membres de l'équipe
    this.translate.get('team.members').subscribe((members: any[]) => {
      this.equipe = this.equipeData.map((data, index) => ({
        nom: members[index]?.name || '',
        poste: members[index]?.position || '',
        numero: data.numero,
        image: data.image
      }));
    });
  }
}