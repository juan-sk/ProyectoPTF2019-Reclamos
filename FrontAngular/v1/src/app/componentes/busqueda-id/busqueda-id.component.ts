import { Component, OnInit } from '@angular/core';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { Router } from '@angular/router';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
@Component({
  selector: 'app-busqueda-id',
  templateUrl: './busqueda-id.component.html',
  styleUrls: ['./busqueda-id.component.css']
})
export class BusquedaIdComponent implements OnInit {
  constructor(private rsService:RsServiceService,private router:Router,private servicioEmpresa:EmpresaServiceService) { }
  rs:ReclamoSugerencia;
  idBusqueda:number;
  mostrarPerfil:boolean=false;
  noMostrarPerfil:boolean;
  nombreEmpresa:string;
  ngOnInit() {
    this.noMostrarPerfil=!this.mostrarPerfil;
    console.log(localStorage.getItem("Email"))
    if((localStorage.getItem("Email")=="anonimo")){
      this.mostrarPerfil=true;
    }else
      this.rsService.getReclamo(+(localStorage.getItem("idBusqueda"))).subscribe(params =>{
      this.rs=params;
      console.log("algo " + params);
      
      this.servicioEmpresa.nombreEmpresa(this.rs.idEmpresa).subscribe(params =>{
      this.nombreEmpresa=params.nombreEmpresa;
      console.log(this.nombreEmpresa);
      })

    });
  }

  //cerrarSesion():vacio ->vacio
  //cierra la sesion de usuario 
  //cambia el valor de la variable Email guardada en localStorage a anonimo
  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }
  //buscarPorId():vacio -> vacio
  //guarda el valor de la variable idBusqueda
  //en localStorage y luego redirige al componente
  //de busqueda
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.rsService.getReclamo(+(localStorage.getItem("idBusqueda"))).subscribe(params =>{
      this.rs=params;
      if(params == null){
        alert("El ID ingresado no existe  ");
      }
    });
    
  }
  realizarSugerencia(){
    this.router.navigate(["realizar_sugerencia"]);
  }
  realizarReclamo(){
    this.router.navigate(["realizar_reclamo"]);
  }
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  registrar(){
    this.router.navigate(['registrar']);
  }
  //login():vacio-> vacio
  //redirige al componente login
  login(){
    this.router.navigate(['login']);
  }
}

//hola vanne, este comentario es para darte un merge conflict con amor