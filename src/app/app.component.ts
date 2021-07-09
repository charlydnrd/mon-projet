import { Component, Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { MonHero } from './mon-hero.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonjour Châteauroxx';
  monAnimal= new Animal('Chat','Arwen',new Date("2008-08-23"));
  monHero = new MonHero('superman', 'clark kent', false);

  monHero2 = new MonHero('spiderman', 'clark kent', false);

  monHero3 = new MonHero('all might', 'clark kent', false);

  monHero4 = new MonHero('joker', 'clark kent', true);
  listHero:MonHero[];

  constructor(private heroService:HeroService){
    heroService.ajouter(this.monHero)
    heroService.ajouter(this.monHero2)
    heroService.ajouter(this.monHero3)
    heroService.ajouter(this.monHero4)

    this.listHero=heroService.recupererListe();
  

  }
}

class Animal
{
  race:string;
  nom:string;
  dateNaissance:Date;
  constructor(pRace:string,pNom:string,pDate:Date)
    {
      this.nom = pNom;
      this.race = pRace;
      this.dateNaissance = pDate;
    }
  afficherInfo()
    {
      return "Mon "+this.race+" s'appelle "+this.nom;
    }
}
