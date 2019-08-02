import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Empresa } from 'src/app/Modelo/Empresa';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {
  //atributos
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  infoEmrpesa:Empresa=JSON.parse(localStorage.getItem("empresa"));
  trabajadores:Trabajador[]=[];
  administrador:boolean=false;

  constructor(private router:Router,private servicioEmrpesa:EmpresaServiceService,private servicioTrabajador:TrabajadorServiceService) { }
  //este metodo se ejecuta al momento de iniciar el componente 
  ngOnInit() {
    if(this.infoTrabajador==null){
      this.router.navigate(["home"]);
    }
    if(this.infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
    this.servicioTrabajador.listaTrabajadores(this.infoEmrpesa.rutEmpresa).subscribe(data=>{
      this.trabajadores=data;
    });
   

  }
  //eliminarTrabajador(Trabajador): Trabajador-> vacio
  // ejecuta el metodo eliminarTrabajador del servicio TrabajadorService
  eliminarTrabajador(trabajador:Trabajador){
    this.servicioTrabajador.eliminarTrabajador(trabajador.idTrabajador).subscribe(data=>{location.reload();});

  }
  //agregarTrabajador():
  //redirecciona al componente agregar trabajador de empresa
  agregarTrabajador(){
    this.router.navigate(["empresa/agregarTrabajador"]);
  }
  //irTrabajadores():vacio->vacio
  //redirige al componente trabajadores de empresa
  irTrabajadores(){
    this.router.navigate(["empresa/listarTrabajadores"]);
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
