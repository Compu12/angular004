import { Injectable } from '@angular/core';
import { HEROES } from '../constantes/heroes.constant';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor() { }
  //metodos
  getHeroes():Heroe[]{
    return HEROES;
  }
}
