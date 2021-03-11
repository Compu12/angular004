import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalleheroe.component.html',
  styleUrls: ['./detalleheroe.component.css']
})
export class DetalleheroeComponent implements OnInit {

   //public heroe?:Heroe;
  @Input() parametro?:string;

  constructor(public heroeSrv:HeroeService) { 

   
  }

  ngOnInit(): void {
    
  }

}
