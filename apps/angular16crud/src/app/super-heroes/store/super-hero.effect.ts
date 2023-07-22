import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SuperHeroesService } from "../super-heroes.service";
import { ToastrService } from "ngx-toastr";
import { addsuperhero, deletesuperhero, failadd, faildelete, failget, getsuperheroes, successadd, successdelete, successget } from "./super-hero.action";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs'



@Injectable()
export class SuperHeroEffect {

    

    // showError(message, type) {
    //     this.toastr.error(message, type);
    // } 

    addStudent$ =  createEffect(() => this.actions$
        .pipe(
            ofType(addsuperhero),
            mergeMap(
                (data) => this.service.addSuperHero(data.payload)
                    .pipe(
                        map(success => {
                            return successadd()
                            
                        }),
                        catchError(() => {
                            return of(failadd())
                        })
                    )
            ),
        )
    );

    getSuperHeroes$ = createEffect(() => this.actions$
     .pipe(
        ofType(getsuperheroes),
        mergeMap(() => this.service.getAllSuperHeroes()
         .pipe(
            map((data) => {
                console.log("===bbbb===",data);
                
                return successget({superheros: data})
            }),
            catchError(() => of(failget()))
         )
        )
     )
    )

    deleteSuperHero$ = createEffect(() => this.actions$
      .pipe(
        ofType(deletesuperhero),
        mergeMap((data) => this.service.delete(data.id)
         .pipe(
            map((success) => {
                return successdelete({id : data.id})
            }),
            catchError((error) => of(faildelete(error)))
         )
        )
      )
    )


    constructor(
        private actions$: Actions,
        private service: SuperHeroesService,
        private toastr: ToastrService
    ) { }
}