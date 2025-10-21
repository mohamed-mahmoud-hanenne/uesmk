// // src/app/core/multi-translate-loader.ts
// import { HttpClient } from '@angular/common/http';
// import { TranslateLoader } from '@ngx-translate/core';
// import { forkJoin, map, Observable } from 'rxjs';

// export class MultiTranslateHttpLoader implements TranslateLoader {
//   constructor(
//     private http: HttpClient,
//     private prefix: string = './assets/i18n/',
//     private suffix: string = '.json',
//     private files: string[] = ['navbar', 'home'] // liste des fichiers par défaut
//   ) {}

//   getTranslation(lang: string): Observable<any> {
//     const calls = this.files.map(file => this.http.get(`${this.prefix}${lang}/${file}${this.suffix}`));
//     return forkJoin(calls).pipe(map(responses => Object.assign({}, ...responses)));
//   }
// }

// // factory pour fournir le loader depuis main.ts
// export function multiLoaderFactory(http: HttpClient) {
//   return new MultiTranslateHttpLoader(http, './assets/i18n/', '.json', ['navbar', 'home']);
// }
