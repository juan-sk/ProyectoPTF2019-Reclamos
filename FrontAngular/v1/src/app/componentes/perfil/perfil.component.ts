/*---------------------------*/
/* COMPONENTE PERFIL USUARIO */
/*---------------------------*/

//imports
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';

//Definicion del componente, selector, y ruta
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

//Clase principal de Perfil Usuario
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

  //ngOnInit: void -> void
  //Funcion que inicia al cargar el componente
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

  //realizarReclamo: void -> void
  //Redirige a vista Realizar Reclamo
  realizarReclamo() {
  	this.router.navigate(['realizar_reclamo']);
  }

  //realizarSugerencia: void -> void
  //Redirige a vista Realizar Sugerencia
  realizarSugerencia(){
    this.router.navigate(['realizar_sugerencia']);
  }

  //cerrarSesion: void -> void
  //Muta el email activo a anonimo (para cerrar sesion) y redirige a la vista home.
  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }

  //miPerfil: void -> void
  //Redirige a la vista Mi Perfil
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

  //iraPerfil: void -> void
  //Redirige a vista Perfil
  iraPerfil() {
    this.router.navigate(['Perfil']);
  }

  //home: void -> void
  //Redirige a vista Home
  home(){
    this.router.navigate(['home']);
  }

  //irNosotros: void -> void
  //Redirige a vista Nosotros
  irNosotros(){
    this.router.navigate(["nuestro_equipo"]);
  }
 
}
