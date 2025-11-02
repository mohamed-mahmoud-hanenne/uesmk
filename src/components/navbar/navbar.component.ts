import { Component, afterNextRender } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    isDarkMode = false; // Par défaut clair
    currentLang = 'fr';

      // Méthode pour fermer le navbar
  closeNavbar() {
    const navbarCollapse = document.getElementById('navbarContent');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  }

  constructor(private translate: TranslateService) {
    // Définir la langue par défaut
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
    
    // Exécuter après le rendu (côté client uniquement)
    afterNextRender(() => {
      const savedLang = localStorage.getItem('language');
      if (savedLang) {
        this.currentLang = savedLang;
        this.translate.use(savedLang);
        this.updateDirection(savedLang);
      }
      
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        document.body.classList.add('dark-mode');
      }
    });
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'fr' ? 'ar' : 'fr';
    this.translate.use(this.currentLang);
    localStorage.setItem('language', this.currentLang);
    this.updateDirection(this.currentLang);
  }

  updateDirection(lang: string) {
    const htmlTag = document.documentElement;
    if (lang === 'ar') {
      htmlTag.setAttribute('dir', 'rtl');
      htmlTag.setAttribute('lang', 'ar');
    } else {
      htmlTag.setAttribute('dir', 'ltr');
      htmlTag.setAttribute('lang', 'fr');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }



}
