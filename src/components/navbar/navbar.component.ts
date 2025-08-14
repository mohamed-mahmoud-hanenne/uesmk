import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    isDarkMode = false; // Par défaut clair

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode; // Inverse le mode
    document.body.classList.toggle('dark-mode', this.isDarkMode); // Ajoute/enlève la classe au body
  }
}
