/*--------------------------------------*/
/* COMPONENTE NOSOTROS (NUESTRO EQUIPO) */
/*--------------------------------------*/
//Vista de nuestros valores, nuestra mision, vision y miembros del grupo con bajada breve.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Definicion del componente, selector y rutas.
@Component({
  selector: 'app-nuestro-equipo',
  templateUrl: './nuestro-equipo.component.html',
  styleUrls: ['./nuestro-equipo.component.css']
})

//Clase principal
export class NuestroEquipoComponent implements OnInit {

  //constructor
  constructor(private router:Router) { }

  //ngOnInit: void -> void
  //Funcion que arranca al iniciar el componente
  ngOnInit() {
  }

  //home: void -> void
  //Redirige a la vista Home
  home(){
  	this.router.navigate(['home']);
  }
  
}
