import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { EquipesComponent } from '../components/equipes/equipes.component';
import { DocumentsComponent } from '../components/documents/documents.component';
import { UniversiteComponent } from '../components/universite/universite.component';
import { ActivitesComponent } from '../components/activites/activites.component';
import { CouratiComponent } from '../components/courati/courati.component';
import { ContactComponent } from '../components/contact/contact.component';

export const routes: Routes = [
    {path:'', redirectTo:'', pathMatch:'full'},
    {path:'', component:HomeComponent},
    {path:'documents', component:DocumentsComponent},
    {path:'universite', component:UniversiteComponent},
    {path:'activites', component:ActivitesComponent},
    {path:'courati', component:CouratiComponent},
    {path:'equipes', component:EquipesComponent},
    {path:'contact', component:ContactComponent}
];
