import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AllSuperheroesComponent } from './super-heroes/all-superheroes/all-superheroes.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AddSuperheroesComponent } from './super-heroes/add-superheroes/add-superheroes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { EditSuperheroesComponent } from './super-heroes/edit-superheroes/edit-superheroes.component';
import { DeleteDialogSuperheroesComponent } from './super-heroes/delete-dialog-superheroes/delete-dialog-superheroes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { superHeroReducer } from './super-heroes/store/super-hero.reducer';
import { ToastrModule } from 'ngx-toastr';
import { EffectsModule } from '@ngrx/effects';
import { SuperHeroEffect } from './super-heroes/store/super-hero.effect';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    AllSuperheroesComponent,
    AddSuperheroesComponent,
    EditSuperheroesComponent,
    DeleteDialogSuperheroesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    StoreModule.forRoot({superhero: superHeroReducer}),
    ToastrModule.forRoot(),
    EffectsModule.forRoot([
      SuperHeroEffect
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
