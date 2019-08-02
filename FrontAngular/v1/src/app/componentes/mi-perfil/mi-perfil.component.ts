import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  //atributos
  nombre:string = localStorage.getItem('Email');
  nombreUsuario:string;
  apellidoUsuario:string;
  rutUsuario: string;
  idBusqueda: string;
  emailUsuario: string;
  fonoUsuario: string; 
  generoUsuario: string;
  fechaNacUsuario: string; 

  constructor(private router:Router, private serviceRS:RsServiceService) { }
 
  //este metoso se ejecuta al momento de iniciar el componente
  ngOnInit() {
    this.nombreUsuario=localStorage.getItem("nombre");
    this.apellidoUsuario=localStorage.getItem("apellido");
    this.emailUsuario=localStorage.getItem("Email"); 
    this.fonoUsuario=localStorage.getItem("fonoUsuario"); 
    this.generoUsuario=localStorage.getItem("generoUsuario");
    this.fechaNacUsuario=localStorage.getItem("fechaNacUsuario");
    this.rutUsuario=localStorage.getItem("idUsuario");

  } 

  realizarReclamo() {
  	this.router.navigate(['realizar_reclamo']);
  }
  //realizarSugerencia: void -> void
  //Redirige a la vista realizar_sugerencia
  realizarSugerencia(){
    this.router.navigate(['realizar_sugerencia']);
  }

  //cerrarSesion():vavio-> vacio
  //al ejecutar el metodo se borra la informacion de el localstorage y rediririge al componente home_empresa
  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }

  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  //home: void -> void
  //Redirige a la vista Home
  home(){
    this.router.navigate(['home']);
  }
  //redirige al componente sugerencia
  irNosotros(){
    this.router.navigate(["nuestro_equipo"]);
  }

}
