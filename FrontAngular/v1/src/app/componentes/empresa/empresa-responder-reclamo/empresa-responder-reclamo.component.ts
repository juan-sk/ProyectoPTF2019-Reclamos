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
  rs:ReclamoSugerencia;
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  administrador:boolean=false;
  constructor(private servicioRS:RsServiceService,private router:Router) { }

  ngOnInit() {
    this.rs= JSON.parse(localStorage.getItem("Reclamo"));
    
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
  enviarRespuesta(){
    this.rs.estado="resuelto";
    this.rs.fechaResuelto=new Date();
    console.log(" se esta respondiendo");
    this.servicioRS.responderRS(this.rs).subscribe(data=>{});
    this.router.navigate(["empresa/perfil"]);
  }
  
  itTrabajadores(){
    this.router.navigate(["empresa/listarTrabajadores"]);
  }
}
