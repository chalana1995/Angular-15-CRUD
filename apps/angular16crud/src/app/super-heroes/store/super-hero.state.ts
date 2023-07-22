import { SuperHeroes } from "../super-heroes"

export interface SuperHeroState {
    superHeroes: SuperHeroes[],
    error: string | any,
    success: string | any
}

export const initialState: SuperHeroState = {
    superHeroes: [],
    error: "",
    success: ""
}