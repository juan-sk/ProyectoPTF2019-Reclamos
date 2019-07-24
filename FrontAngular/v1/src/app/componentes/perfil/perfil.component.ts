import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router:Router,private servicioRS:RsServiceService,private servicioEmpresa:EmpresaServiceService) { }
  nombre:string = localStorage.getItem('Email');
  nombreUsuario:string;
  apellidoUsuario:string;
  idBusqueda:number;
  reclamosSugerencias:ReclamoSugerencia[]=[];
  mensaje:string="";
  mostrarMensaje:boolean=false;
  nombresEmpresas:string[]=[];
  
  botonEstadoEnProceso:boolean[]=[];
  botonEstadoResuelto:boolean[]=[];
  ngOnInit() {
      if(this.nombre=="anonimo"){
        this.router.navigate(["home"]);
      }
      this.nombreUsuario=localStorage.getItem("nombre");
      this.apellidoUsuario=localStorage.getItem("apellido");
      this.servicioRS.getRSUsuario(+localStorage.getItem("idUsuario")).subscribe(data=>{
        this.reclamosSugerencias=data;
        
        for(let i=0;i<this.reclamosSugerencias.length;i++){
          this.servicioEmpresa.nombreEmpresa(this.reclamosSugerencias[i].idEmpresa).subscribe(data=>{
           this.nombresEmpresas.push(data.nombreEmpresa);
          })
          //botones de estado
          if (this.reclamosSugerencias[i].estado == "en proceso") {
            this.botonEstadoEnProceso[i] = true;
            this.botonEstadoResuelto[i] = false;
          }
          else {
            this.botonEstadoEnProceso[i] = false;
            this.botonEstadoResuelto[i] = true;
          }
        }
      });
      
      if (this.reclamosSugerencias.length==0){
        this.mensaje="Aun no tienes Reclamos ni Sugerencias";
        this.mostrarMensaje=true;
      }   
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
  miPerfil() {
    this.router.navigate(['miPerfil']);
  }
  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);

  }
  iraPerfil() {
    this.router.navigate(['Perfil']);
  }
 
}
