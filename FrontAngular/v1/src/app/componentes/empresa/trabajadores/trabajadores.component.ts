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

  constructor(private router:Router,private servicioEmrpesa:EmpresaServiceService,private servicioTrabajador:TrabajadorServiceService) { }
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  infoEmrpesa:Empresa=JSON.parse(localStorage.getItem("empresa"));
  trabajadores:Trabajador[]=[];
  administrador:boolean=false;
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
  eliminarTrabajador(trabajador:Trabajador){
    this.servicioTrabajador.eliminarTrabajador(trabajador.idTrabajador).subscribe();
    location.reload();

  }
  agregarTrabajador(){
    this.router.navigate(["empresa/agregarTrabajador"]);
  }
  irTrabajadores(){
    this.router.navigate(["empresa/listarTrabajadores"]);
  }
  
  irSugerencia(){
    this.router.navigate(["empresa/listaSugerencias"]);
  }
  
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
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['home_empresa']);
  }
}
