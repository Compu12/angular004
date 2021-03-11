import { Injectable } from '@angular/core';
import { HEROES } from '../constantes/heroes.constant';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  heroeSeleccionado?:Heroe;
  constructor() { }
  //metodos
  getHeroes():Heroe[]{
    return HEROES;
  }

  capturarHeroe(heroe: Heroe): void {
    this.heroeSeleccionado = heroe;
  }
}
