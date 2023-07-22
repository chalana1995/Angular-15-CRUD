import { Action, createAction, props } from "@ngrx/store";
import { SuperHeroes } from "../super-heroes";


export const addsuperhero = createAction("ADD_SUPERHERO", props<{payload: any}>());
export const successadd = createAction("ADD_SUPERHERO_SUCCESS");
export const failadd = createAction("ADD_SUPERHERO_FAIL");



//export const getsuperhero = createAction("GET_SUPER_HERO");

export const getsuperheroes = createAction("GET_SUPER_HEROES");
export const successget = createAction("GET_SUCCESS_SUPERHERO", props<{superheros: SuperHeroes[]}>());
export const failget = createAction("GET_FAIL_SUPERHERO");


export const updatesuperhero = createAction("UPDATE_SUPER_HERO");
export const successupdate = createAction("UPDATE_SUCCESS_SUPERHERO");
export const failupdate = createAction("UPDATE_FAIL_SUPERHERO");

export const deletesuperhero = createAction("DELETE_SUPER_HERO", props<{id: number}>());
export const successdelete = createAction("DELETE_SUCCESS_SUPERHERO", props<{id: number}>());
export const faildelete = createAction("DELETE_FAIL_SUPERHERO",props<{payload: number}>());
