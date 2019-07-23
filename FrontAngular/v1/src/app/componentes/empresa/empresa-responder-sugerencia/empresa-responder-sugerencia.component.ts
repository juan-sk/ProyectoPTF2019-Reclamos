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

  constructor(private router:Router,private servicioRS:RsServiceService) { }
  rs:ReclamoSugerencia;
  administrador:boolean=false;
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  ngOnInit() {
    this.rs= JSON.parse(localStorage.getItem("Sugerencia"));
    if (this.infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
  }
  irPerfil(){
    this.router.navigate(["empresa/perfil"]);
  }
  irSugerencia(){
    this.router.navigate(["empresa/listaSugerencias"]);
  }
  irReclamo(){
    this.router.navigate(["empresa/listaReclamos"]);
  }
  verEstadisticas(){
    this.router.navigate(["empresa/estadisticas"]);
  }
  trabajadores(){

  }
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['home_empresa']);
  }
  responderSugerencia(){
    this.rs.estado="resuelto";
    this.rs.fechaResuelto=new Date();
    console.log(" se esta respondiendo");
    this.servicioRS.responderRS(this.rs).subscribe(data=>{});
    this.router.navigate(["empresa/perfil"]);
  }
  
  irTrabajadores(){
    this.router.navigate(["empresa/listarTrabajadores"]);
  }
}
