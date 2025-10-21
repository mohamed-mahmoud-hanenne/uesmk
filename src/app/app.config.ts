// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
// };


import { ApplicationConfig, importProvidersFrom, Inject, PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { isPlatformBrowser } from '@angular/common';
import { of } from 'rxjs';

import { routes } from './app.routes';

// ✅ Correction pour SSR : gestion du chargement côté serveur
export function HttpLoaderFactory(http: HttpClient, platformId: Object): TranslateLoader {
  if (isPlatformBrowser(platformId)) {
    // Côté navigateur → charger normalement les fichiers JSON
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  } else {
    // Côté serveur → éviter l'erreur en renvoyant un loader vide
    return {
      getTranslation: () => of({})
    } as TranslateLoader;
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'fr',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient, PLATFORM_ID]
        }
      })
    )
  ]
};
