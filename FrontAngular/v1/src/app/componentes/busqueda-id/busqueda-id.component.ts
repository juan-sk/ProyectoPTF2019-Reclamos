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
  rs:ReclamoSugerencia;
  idBusqueda:number;
  mostrarPerfil:boolean=false;
  noMostrarPerfil:boolean;
  nombreEmpresa:string;

  constructor(private rsService:RsServiceService,private router:Router,private servicioEmpresa:EmpresaServiceService) { }

  //ngOnInIt(): vacio --> vacio
  //Muestra los componentes de la vista busqueda por id
  ngOnInit() {
    this.noMostrarPerfil=!this.mostrarPerfil;
    if((localStorage.getItem("Email")=="anonimo")){
      this.mostrarPerfil=true;
    }else
      this.rsService.getReclamo(+(localStorage.getItem("idBusqueda"))).subscribe(params =>{
      this.rs=params;      
      this.servicioEmpresa.nombreEmpresa(this.rs.idEmpresa).subscribe(params =>{
      this.nombreEmpresa=params.nombreEmpresa;
      
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
  //en localStorage y luego redirige al componente de busqueda
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.rsService.getReclamo(+(localStorage.getItem("idBusqueda"))).subscribe(params =>{
      this.rs=params;
      if(params == null){
        alert("El ID ingresado no existe  ");
      }
    });
  }
  //################# BOTONES DISPONIBLES EN LA VISTA  BUSCAR POR ID ######################

  //realizarSugerencia():vacio-> vacio
  //redirige al componente realizar sugerencia
  realizarSugerencia(){
    this.router.navigate(["realizar_sugerencia"]);
  }
  //realizarReclamo():vacio-> vacio
  //redirige al componente realizar reclamo
  realizarReclamo(){
    this.router.navigate(["realizar_reclamo"]);
  }
  //homeEmpresa():vacio-> vacio
  //redirige al componente del home empresas
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  //registrar():vacio--> vacio
  //redirige al componente registrar usuario
  registrar(){
    this.router.navigate(['registrar']);
  }
  //login():vacio-> vacio
  //redirige al componente login
  login(){
    this.router.navigate(['login']);
  }
  //redirige al componente home
  home(){
    this.router.navigate(['home']);
  }
  //redirige al componente sugerencia
  irSugerencia(){
    if(localStorage.getItem("Email")==null||localStorage.getItem("Email")=="anonimo"){
      this.router.navigate(["anonimo/realizar_sugerencia"]);
    }else{
      this.router.navigate(["realizar_sugerencia"]);

    }
  }
  //redirige al componente reclamo
  irReclamo(){
    if(localStorage.getItem("Email")==null||localStorage.getItem("Email")=="anonimo"){
      this.router.navigate(["anonimo/realizar_reclamo"]);
    }else{
      this.router.navigate(["realizar_reclamo"]);

    }
  }
  //redirige al componente sugerencia
  irNosotros(){
    this.router.navigate(["nuestro_equipo"]);
  }
}

