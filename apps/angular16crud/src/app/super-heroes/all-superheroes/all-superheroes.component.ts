import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../super-heroes.service';
import { SuperHeroes } from '../super-heroes';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogSuperheroesComponent } from '../delete-dialog-superheroes/delete-dialog-superheroes.component';
import { Store } from '@ngrx/store';
import AppState from '../app-state.model';
import { getsuperheroes, successget } from '../store/super-hero.action';
import { getSuperHeroSelector } from '../store/super-hero.reducer';

@Component({
  selector: 'portal-all-superheroes',
  templateUrl: './all-superheroes.component.html',
  styleUrls: ['./all-superheroes.component.scss'],
})
export class AllSuperheroesComponent implements OnInit {

  allSuperHero: SuperHeroes[] = []

  constructor(private superHeroService:SuperHeroesService, private dialog:MatDialog, private store: Store<AppState>) {}


  ngOnInit(): void {
    this.getApi()
  }

  getApi(){
    this.superHeroService.getAllSuperHeroes()
    .subscribe((data) => {
      console.log(data);
      this.allSuperHero = data
    })

    // this.allSuperHero = this.store.select(getsuperheroes)
    // this.store.select(getSuperHeroSelector).subscribe((data) => {
    //   console.log("-----data111",data);
    // })
  }

  deleteItem(id:number) {
     const dialogRef = this.dialog.open(DeleteDialogSuperheroesComponent,{
      width:'250px',
      data: {id}
     })

     dialogRef.afterClosed().subscribe((result) => {
         if(result){
          this.allSuperHero = this.allSuperHero.filter(_ => _.id !== result)
         }
     })
  }
}
