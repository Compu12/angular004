import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import {HEROES} from '../../constantes/heroes.constant'

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

  heroes:Heroe[]=HEROES;

  constructor() { }

  ngOnInit(): void {
  }
  capturarHeroe(heroe:Heroe):void{
    this.heroe=heroe;



  }

}
