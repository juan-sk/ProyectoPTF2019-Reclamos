import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { Empresa } from 'src/app/Modelo/Empresa';

@Component({
  selector: 'app-agregar-trabajadores',
  templateUrl: './agregar-trabajadores.component.html',
  styleUrls: ['./agregar-trabajadores.component.css']
})
export class AgregarTrabajadoresComponent implements OnInit {

  constructor(private router:Router,private servicioTrabajador:TrabajadorServiceService) { }
  trabajador:Trabajador=new Trabajador();
  infoTrabajador:Trabajador = JSON.parse(localStorage.getItem("trabajador"));
  infoEmrpesa:Empresa=JSON.parse(localStorage.getItem("empresa"));
  administrador:boolean=false;
  pass2:string="";
  mensajedeError="";
  ngOnInit() {
    
    if(!(this.infoTrabajador!=null)){
      this.router.navigate(["home"]);
    }
    if(this.infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
    this.trabajador.empresa=this.infoEmrpesa.nombreEmpresa;
  }
  agregarTrabajador(){
    if(this.trabajador.passTrabajador==this.pass2){

      this.servicioTrabajador.agregarTrabajador(this.trabajador).subscribe();
      this.mensajedeError="";
      this.router.navigate(["empresa/listarTrabajadores"]);
    }
    else{
      this.mensajedeError="las contraseñas no coinciden";
    }
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
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['home_empresa']);
  }
  irSugerencia(){
    this.router.navigate(["empresa/listaSugerencias"]);
  }
}
