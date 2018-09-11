import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  jugador = {
    nombre: 'Sergio',
    apellidos: 'Ramos',
    fechaNac: 1985
  }

  constructor() { }

  ngOnInit() {
  }

  getEdad() {
    return new Date().getFullYear() - this.jugador.fechaNac
  }



}
