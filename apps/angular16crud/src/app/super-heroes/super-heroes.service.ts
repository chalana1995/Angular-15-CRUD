import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from'rxjs'
import { SuperHeroes } from './super-heroes';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  constructor(private http:HttpClient) { }

  getAllSuperHeroes():Observable<SuperHeroes[]>{
    return this.http.get<SuperHeroes[]>("http://localhost:3000/superHeroes")
  }

  addSuperHero(payload: SuperHeroes){
    console.log("====payload", payload);
    
     return this.http.post("http://localhost:3000/superHeroes", payload)
  }

  getById(id:number){
    return this.http.get(`http://localhost:3000/superHeroes/${id}`)
  }

  update(payload: SuperHeroes)
  {
    return this.http.put(`http://localhost:3000/superHeroes/${payload.id}`, payload)
  }

  delete(id:number){
    return this.http.delete(`http://localhost:3000/superHeroes/${id}`)
  }
}
