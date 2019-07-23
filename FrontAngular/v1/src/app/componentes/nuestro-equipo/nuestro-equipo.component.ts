import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuestro-equipo',
  templateUrl: './nuestro-equipo.component.html',
  styleUrls: ['./nuestro-equipo.component.css']
})
export class NuestroEquipoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home(){
  	this.router.navigate(['home']);
  }
  
}
