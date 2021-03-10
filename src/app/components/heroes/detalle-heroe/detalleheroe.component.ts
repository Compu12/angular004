import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalleheroe.component.html',
  styleUrls: ['./detalleheroe.component.css']
})
export class DetalleheroeComponent implements OnInit {

  @Input() heroe?:Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
