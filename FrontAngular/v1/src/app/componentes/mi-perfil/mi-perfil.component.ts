import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  constructor(private router:Router, private serviceRS:RsServiceService) { }
  nombre:string = localStorage.getItem('Email');
  nombreUsuario:string;
  apellidoUsuario:string;
  rutUsuario: string;
  idBusqueda: string;
  emailUsuario: string;
  fonoUsuario: string; 
  generoUsuario: string;
  fechaNacUsuario: string; 
 

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
  realizarSugerencia(){
    this.router.navigate(['realizar_sugerencia']);
  }

  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }

  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  home(){
    this.router.navigate(['home']);
  }
  irNosotros(){
    this.router.navigate(["nuestro_equipo"]);
  }

}
