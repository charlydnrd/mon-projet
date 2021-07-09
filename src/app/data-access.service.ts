import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  

  constructor(private httpService:HttpClient, private animalService:AnimalService) { 

  }
  saveData(pAnimal:Animal[]){


this.httpService{
  .put('https://heroacademy-65271-default-rtdb.europe-west1.firebasedatabase.app/animals.json', pAnimal
  )
  .subscribe((res:any) => {console.log(res); });
}
fetchData()
{
this.httpService.get<Animal[]>('https://heroacademy-65271-default-rtdb.europe-west1.firebasedatabase.app/animals.json')
.pipe(tap((animalList: Animal[]) => {
  if (animalList!=null)
  this.animalService.setListe(animalList);
}) ) .subscribe();
}

}

function pAnimal(arg0: string, pAnimal: any) {
  throw new Error('Function not implemented.');
}

}

