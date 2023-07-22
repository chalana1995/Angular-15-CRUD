import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SuperHeroesService } from '../super-heroes.service';
import { SuperHeroes } from '../super-heroes';
import { Router } from '@angular/router';
import AppState from '../app-state.model';
import { Store } from '@ngrx/store';
import { addsuperhero, successadd } from '../store/super-hero.action';

@Component({
  selector: 'portal-add-superheroes',
  templateUrl: './add-superheroes.component.html',
  styleUrls: ['./add-superheroes.component.scss'],
})
export class AddSuperheroesComponent {
  constructor(
    private fb: FormBuilder,
    private superHeroService: SuperHeroesService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  addSuperHeroForm = this.fb.group({
    name: [''],
    imageUrl: [''],
    franchies: [''],
    gender: [''],
  });

  noImage =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

  create() {
    // console.log(this.addSuperHeroForm.value);
    // this.superHeroService.addSuperHero((this.addSuperHeroForm.value as SuperHeroes))
    //   .subscribe(() => {
    //     this.router.navigate(["/"]);
    //   });
    this.store.dispatch(addsuperhero({payload: this.addSuperHeroForm.value}));
    this.store.select(successadd).subscribe((e) => {
      console.log("====e",e);
      
      this.router.navigate(["/"]);
    })

  }
}
