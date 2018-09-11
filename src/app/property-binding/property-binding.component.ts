import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imagen = 'assets/img/madrid.jpg';

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.imagen = 'assets/img/220px-Sevilla_Cathedral_-_Giralda.jpg';
    }, 3000);
  }

}
