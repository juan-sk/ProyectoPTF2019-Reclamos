import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Trabajador } from 'src/app/Modelo/trabajador';

@Component({
  selector: 'app-empresa-responder-reclamo',
  templateUrl: './empresa-responder-reclamo.component.html',
  styleUrls: ['./empresa-responder-reclamo.component.css']
})
export class EmpresaResponderReclamoComponent implements OnInit {
  //atributos
  rs:ReclamoSugerencia;
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  administrador:boolean=false;

  constructor(private servicioRS:RsServiceService,private router:Router) { }
  //este metodo  se ejecuta al iniciar el componente
  ngOnInit() {
    this.rs= JSON.parse(localStorage.getItem("Reclamo"));
    
    if (this.infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
  }


  //irPerfil(): vavio->vacio (redireccion a componente perfil empresa)
  //al llamar el metodo se realida el redireccionamiento al componente perfil-empresa
  //a travez del path empreza/perfil, este componente es parte de la vista de trabajador de la empresa
  irPerfil(){
    this.router.navigate(["empresa/perfil"]);
  }
  //irSugerencia(): vavio->vacio (redireccion a componente listar sugerencias)
  //al llamar el metodo se realida el redireccionamiento al componente listar sugerencia
  //a travez del path empreza/listarSugerencias, este componente es parte de la vista de trabajador de la empresa
  irSugerencia(){
    this.router.navigate(["empresa/listaSugerencias"]);
  }
  //irReclamo(): vavio->vacio (redireccion a componente listar reclmaos)
  //al llamar el metodo se realida el redireccionamiento al componente listar reclamo
  //a travez del path empreza/listaReclamos, este componente es parte de la vista de trabajador de la empresa
  irReclamo(){
    this.router.navigate(["empresa/listaReclamos"]);
  }
  //verEstadisticas():vacio->vacio
  //redirecciona al componente estadisticas de empresa
  verEstadisticas(){
    this.router.navigate(["empresa/estadisticas"]);
  }

  //cerrarSesion():vavio-> vacio
  //al ejecutar el metodo se borra la informacion de el localstorage y rediririge al componente home_empresa
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['home_empresa']);
  }
  //enviarRespuesta(): vacio->vacio
  //cambia el valor del atributo estado del objeto ReclamoSugerencia llamado rs 
  //al valor de "resuelto"
  //tambien cambia el estado de atributo fecha, asignandole el valor de un nuevo objeto Date
  //una vez hecho esto el objeto "rs" es enviado al back end utilizando el metodo responderRS del servicio rs-service 
  //una vez enviado se redirecciona al componente  perfil empresa 
  enviarRespuesta(){
    this.rs.estado="resuelto";
    this.rs.fechaResuelto=new Date();
  
    this.servicioRS.responderRS(this.rs).subscribe(data=>{});
    this.router.navigate(["empresa/perfil"]);
  }
  
  //irTrabajadores():vacio->vacio
  //redirige al componente trabajadores de empresa
  itTrabajadores(){
    this.router.navigate(["empresa/listarTrabajadores"]);
  }
  //homeEmpresa():vacio->vacio
  //redirecciona al componente home_empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
}
