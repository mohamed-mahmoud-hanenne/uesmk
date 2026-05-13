import { Component, Inject, afterNextRender, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

const LANG_KEY = 'lang_v2';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isDarkMode = false;
  currentLang = 'ar';

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.translate.setDefaultLang('ar');

    if (isPlatformBrowser(this.platformId)) {
      // Read saved lang synchronously — no race condition with afterNextRender
      const savedLang = localStorage.getItem(LANG_KEY) ?? 'ar';
      this.currentLang = savedLang;
      this.translate.use(savedLang);
      this.updateDirection(savedLang);
    } else {
      // SSR: use default, no localStorage available
      this.translate.use('ar');
    }

    afterNextRender(() => {
      // Theme needs document.body — client-only, keep here
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        document.body.classList.add('dark-mode');
      }
    });
  }

  closeNavbar() {
    const navbarCollapse = document.getElementById('navbarContent');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new (window as any).bootstrap.Collapse(
        navbarCollapse,
        { toggle: false },
      );
      bsCollapse.hide();
    }
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'fr' ? 'ar' : 'fr';
    this.translate.use(this.currentLang);
    localStorage.setItem(LANG_KEY, this.currentLang);
    this.updateDirection(this.currentLang);
  }

  updateDirection(lang: string) {
    const html = document.documentElement;
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'fr');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
}
