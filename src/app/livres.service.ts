import { EventEmitter, Injectable } from '@angular/core';
import { Livre } from './livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  
  private _listeLivre: Livre[]=[]
  listeChangeEvent: EventEmitter<Livre[]> = new EventEmitter()
  constructor() {}

  deleteLivre(index: number) {
    console.log('deleteLivre')
    this._listeLivre.splice(index, 1)
    this.listeChangeEvent.emit(this._listeLivre)
  }

  addLivre(vLivre:Livre) {
    this._listeLivre.push(vLivre)
    this.listeChangeEvent.emit(this._listeLivre)
  }

  updateListeLivres(vListeLivre:Livre[]) {
    this._listeLivre = vListeLivre
    this.listeChangeEvent.emit(this._listeLivre)
  }

  returnListe():Livre[] {
    return this._listeLivre
  }
}

