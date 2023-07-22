import { Route } from '@angular/router';
import { AllSuperheroesComponent } from './super-heroes/all-superheroes/all-superheroes.component';
import { AddSuperheroesComponent } from './super-heroes/add-superheroes/add-superheroes.component';
import { EditSuperheroesComponent } from './super-heroes/edit-superheroes/edit-superheroes.component';

export const appRoutes: Route[] = [
    {path:'', component:AllSuperheroesComponent},
    {path:'add', component:AddSuperheroesComponent},
    {path:'edit/:id', component:EditSuperheroesComponent}
];
