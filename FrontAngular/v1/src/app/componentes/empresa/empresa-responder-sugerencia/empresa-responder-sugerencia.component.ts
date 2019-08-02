import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Trabajador } from 'src/app/Modelo/trabajador';

@Component({
  selector: 'app-empresa-responder-sugerencia',
  templateUrl: './empresa-responder-sugerencia.component.html',
  styleUrls: ['./empresa-responder-sugerencia.component.css']
})
export class EmpresaResponderSugerenciaComponent implements OnInit {
  //atributos
  rs:ReclamoSugerencia;
  administrador:boolean=false;
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  
  constructor(private router:Router,private servicioRS:RsServiceService) { }
  //este metodo se ejecuta al momento de iniciar el componente
  ngOnInit() {
    //se rescara el valor de Sugerencia guardado en el jocal storage
    //luego se utiliza el metodo parse de la clase JSON para castearlo
    //a un objeto reclamosugerencia
    this.rs= JSON.parse(localStorage.getItem("Sugerencia"));
    
    if (this.infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
  }
  
  //irSugerencia(): vavio->vacio (redireccion a componente listar sugerencias)
  //al llamar el metodo se realida el redireccionamiento al componente listar sugerencia
  //a travez del path empreza/listarSugerencias, este componente es parte de la vista de trabajador de la empresa
  irSugerencia(){
    this.router.navigate(["empresa/listaSugerencias"]);
  }
  
  //verEstadisticas():vacio->vacio
  //redirecciona al componente estadisticas de empresa
  verEstadisticas(){
    this.router.navigate(["empresa/estadisticas"]);
  }
  //responderSugerencia(): vacio ->vacio
  //utilizando el objeto  ReclamoSuegerencia con el identidicador rs
  //se le insertan los valores de estado "resuelto"
  //tambien se cambia el valor de fechaResuelto a la fecha actual del sistema 
  //luego de eso se envia el objeto rs utilizando el metood responderRS del servicio 
  //rs-service
  // una vez enviado se redirecciona al compoente perfil de empresa 
  responderSugerencia(){
    this.rs.estado="resuelto";
    this.rs.fechaResuelto=new Date();

    this.servicioRS.responderRS(this.rs).subscribe(data=>{});
    this.router.navigate(["empresa/perfil"]);
  }
  //irTrabajadores():vacio->vacio
  //redirige al componente trabajadores de empresa
  irTrabajadores(){
    this.router.navigate(["empresa/listarTrabajadores"]);
  }
  //irPerfil(): vavio->vacio (redireccion a componente perfil empresa)
  //al llamar el metodo se realida el redireccionamiento al componente perfil-empresa
  //a travez del path empreza/perfil, este componente es parte de la vista de trabajador de la empresa
  irPerfil(){
    this.router.navigate(["empresa/perfil"]);
  }
  //irReclamo(): vavio->vacio (redireccion a componente listar reclmaos)
  //al llamar el metodo se realida el redireccionamiento al componente listar reclamo
  //a travez del path empreza/listaReclamos, este componente es parte de la vista de trabajador de la empresa
  irReclamo(){
    this.router.navigate(["empresa/listaReclamos"]);
  }
  //homeEmpresa():vacio->vacio
  //redirecciona al componente home_empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  //cerrarSesion():vavio-> vacio
  //al ejecutar el metodo se borra la informacion de el localstorage y rediririge al componente home_empresa
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['home_empresa']);
  }
}
