import { Component, OnInit, Output } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import {HEROES} from '../../constantes/heroes.constant'
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroe:Heroe={
    id:1, 
    nombre:'Superman'
  };

  heroeSeleccionado?:Heroe;
  parametro:string="Hola"
  /* heroes:Heroe[]=HEROES; */

  heroes:Heroe[]=[]
  constructor( private HeroeSrv:HeroeService ) {
    this.heroes=HeroeSrv.getHeroes();
  }

  ngOnInit(): void {
  }
  capturarHeroe(heroe:Heroe):void{
    this.heroeSeleccionado=heroe;

  }

}
