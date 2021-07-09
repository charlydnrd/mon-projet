import { Injectable } from '@angular/core';
import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class AnimalService{
  private _listeAnimaux: any[][]=[
    new Animal('eeeeee','vache'),
    new Animal('tttt','chevre')]
    listChangedEvent: EventEmitter<Animal[]> = new EventEmitter();

  constructor(){

  }
 
  getAnimals():Animal[]{
    return this._listeAnimaux;
  }
  const animalTrouve: any
}
