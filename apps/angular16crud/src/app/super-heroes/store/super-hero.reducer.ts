import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { SuperHeroState, initialState } from "./super-hero.state";
import { addsuperhero, deletesuperhero, faildelete, getsuperheroes, successdelete, successget } from "./super-hero.action";


const getSuperHeroFeatureState = createFeatureSelector<SuperHeroState>('superHero');

export const getSuperHeroSelector = createSelector(
    getSuperHeroFeatureState,
    state => state.superHeroes

);

export const getDeleteStudentSuccessSelector = createSelector(
    getSuperHeroFeatureState,
    state => state.success
);


const _superHeroReducer = createReducer(
    initialState,
    on(addsuperhero, (state) => {
        return {
            ...state,
        }
    }),
    on(getsuperheroes, (state) => {
        return {
            ...state
        }
    }),
    on(successget, (state, {superheros}) => ({
            ...state,
            superHeroes: superheros,
            error: "",
            success: "success"
        
    })),
    on(deletesuperhero, (state) => {
        return {
            ...state
        }
    }),
    on(successdelete, (state, action) => {
        return {
            ...state,
            success: action.id,
            
        }
    }),
    on(faildelete, (state, action) => {
        return {
            ...state,
            error: action.payload
        }
    })
)

export function superHeroReducer(state: any, action: any) {
    return _superHeroReducer(state, action);
  }