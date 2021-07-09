import { Injectable } from '@angular/core';
import { MonHero } from './mon-hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  listeHero:MonHero[]=[]
  ajouter(pHero:MonHero){
    this.listeHero.push(pHero)
  }
  recupererListe():MonHero[]
  {
    return this.listeHero;

  }


  constructor() { }
}


