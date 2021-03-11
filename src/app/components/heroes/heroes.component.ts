import { Component, OnInit, Output } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


 /*  heroe: Heroe = {
    id: 1,
    nombre: 'Superman'
  }; */

 // heroeSeleccionado?: Heroe;
  parametro: string = "Hola"
  /* heroes:Heroe[]=HEROES; */

  public heroes: Heroe[] = []

  constructor(private heroeSrv: HeroeService) {
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  capturarHeroe(heroe: Heroe): void {
    this.heroeSrv.heroeSeleccionado=heroe;
  }

  getHeroes():void{
    this.heroes = this.heroeSrv.getHeroes();
  }

}
