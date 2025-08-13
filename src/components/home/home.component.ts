import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

   // Met tes images réelles ici (doit être dans src/assets/events/)
  images = [
    'images.jpeg',
    'tournoir.jpeg',
    'conf.jpeg',
    'images.jpeg',
    'tournoir.jpeg',
    'conf.jpeg'
  ];

  currentIndex = 0; // indice de la première image visible (0, 2, 4, ...)

  // indice max autorisé (0, 2, 4, ...)
  get maxIndex(): number {
    return (Math.ceil(this.images.length / 2) - 1) * 2;
  }

  // images visibles (max 2)
  get visibleImages(): string[] {
    return this.images.slice(this.currentIndex, this.currentIndex + 2);
  }

  prev(): void {
    this.currentIndex = Math.max(0, this.currentIndex - 2);
  }

  next(): void {
    this.currentIndex = Math.min(this.currentIndex + 2, this.maxIndex);
  }

  isPrevDisabled(): boolean {
    return this.currentIndex === 0;
  }

  isNextDisabled(): boolean {
    return this.currentIndex >= this.maxIndex;
  }

  // fallback si image introuvable
  onImgError(evt: Event) {
    const img = evt.target as HTMLImageElement;
    img.src = 'assets/placeholder-event.jpg'; // ajouter placeholder dans src/assets/
  }

}
