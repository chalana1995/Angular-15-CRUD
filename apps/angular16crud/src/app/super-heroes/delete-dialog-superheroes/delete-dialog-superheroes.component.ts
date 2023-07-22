import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SuperHeroesService } from '../super-heroes.service';
import { Store } from '@ngrx/store';
import AppState from '../app-state.model';
import { deletesuperhero, faildelete, successdelete } from '../store/super-hero.action';
import { getDeleteStudentSuccessSelector } from '../store/super-hero.reducer';

@Component({
  selector: 'portal-delete-dialog-superheroes',
  templateUrl: './delete-dialog-superheroes.component.html',
  styleUrls: ['./delete-dialog-superheroes.component.scss'],
})
export class DeleteDialogSuperheroesComponent {
  constructor(public dialogRef: MatDialogRef<DeleteDialogSuperheroesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private superHeroService: SuperHeroesService,
    private store: Store<AppState>) {}

  confirmDelete(){
    // this.superHeroService.delete(this.data.id).subscribe(() => {
    //   this.dialogRef.close(this.data.id)
    // })

    this.store.dispatch(deletesuperhero({id: this.data.id}))
    this.store.select(getDeleteStudentSuccessSelector).subscribe(() => {
      console.log("success");
      
      this.dialogRef.close(this.data.id)
    })
    // this.store.select(faildelete).subscribe(() => {
    //   console.log("error");
      
    // })
  }
}
