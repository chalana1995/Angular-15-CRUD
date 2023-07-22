import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SuperHeroesService } from '../super-heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperHeroes } from '../super-heroes';

@Component({
  selector: 'portal-edit-superheroes',
  templateUrl: './edit-superheroes.component.html',
  styleUrls: ['./edit-superheroes.component.scss'],
})
export class EditSuperheroesComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private superHeroService: SuperHeroesService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.getById(id)
    })
  }

  editSuperHeroForm = this.fb.group({
    id: [0],
    name: [''],
    imageUrl: [''],
    franchies: [''],
    gender: [''],
  });

  noImage =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

  getById(id: number) {
    this.superHeroService.getById(id).subscribe((res) => {
      this.editSuperHeroForm.setValue(res as SuperHeroes);
    });
  }

  update() {
    this.superHeroService.update(this.editSuperHeroForm.value as SuperHeroes).subscribe(() =>{
      this.route.navigate(['/']);
    })
  }
}
