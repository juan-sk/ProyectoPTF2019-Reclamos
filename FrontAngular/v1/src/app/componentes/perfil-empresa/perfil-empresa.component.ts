/*---------------------------*/
/* COMPONENTE PERFIL EMPRESA */
/*---------------------------*/

//imports
import { Component, OnInit } from '@angular/core';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { Empresa } from 'src/app/Modelo/Empresa';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { ConditionalExpr } from '@angular/compiler';

//Definicion de componente, selector y rutas.
@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})

//Clase PerfilEmpresaComponent
export class PerfilEmpresaComponent implements OnInit {
  //atributos
  reclamosSugerencias:ReclamoSugerencia[]=[];
  administrador:boolean=false;
  colores:string[]=[];
  mostrarMensaje:boolean=false;
  mensaje:string="";
  idEmpresa:number;
  idBusqueda:number;
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  botonEstadoEnProceso:boolean[]=[];
  botonEstadoResuelto:boolean[]=[]; 
  botonResponderHabilitado:boolean[]=[];
  
  constructor(private servicioRS:RsServiceService,private router:Router) { }

  //formatoDate():string->string
  // este metodo invierte el formato de una fecha 
  //esto es nesesario por la forma en que la fecha es guardada en la vase de datos(de guarda de manera ingertida)
  //ejemplo: date= 17-07-2019; formatoDate(date) debuelve-> 2019-07-17
  formatoDate(date:string):string{
    let fechaSeparada=date.split("/");
    let fechaFinal:string[]=[]
    if(+fechaSeparada[0]<10){
      fechaFinal.push("0"+fechaSeparada[0]);
    }
    else{
      fechaFinal.push(fechaSeparada[0]);
    }

    if(+fechaSeparada[1]<10){
      fechaFinal.push("0"+fechaSeparada[1]);
    }else{
      fechaFinal.push(fechaSeparada[1]);
    }

    fechaFinal.push(fechaSeparada[2]);
    let year=fechaFinal[2];
    let month=fechaFinal[1];
    let day=fechaFinal[0];
    let fechaCompleta=year+"-"+month+"-"+day;
    return fechaCompleta;

  }

  //formoatoNumero: string -> string
  //divide la fecha local en substring
  formoatoNumero(date:string):string{
    let year=date.substr(0,4);
    let month=date.substr(5,2)
    let day=date.substr(8,2); 
    return year+""+month+""+day;
  }

  //ngOnInit: void -> void
  //Funcion que arranca al cargar el componente
  ngOnInit() {
    
    let infoEmpresa:Empresa= JSON.parse(localStorage.getItem("empresa")); //trae datos (objeto) empresa
    let infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador")); //trae datos (objeto) trabajador

    if (this.infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
    this.servicioRS.getRSEmpresa(infoEmpresa.rutEmpresa).subscribe(data=>{
      this.reclamosSugerencias=data;
      let hoy=new Date();
      for(let i=0;i<this.reclamosSugerencias.length;i++){
        
        if(this.reclamosSugerencias[i].fechaReclamoSugerencia.toLocaleString()<this.formatoDate(hoy.toLocaleDateString())){
          this.colores[i]="white";
        }else{
          this.colores[i]="rgba(162, 237, 107, 1)";
        } 
        let fechaResuelto=this.reclamosSugerencias[i].fechaResuelto;
        let fechaReclamo=this.reclamosSugerencias[i].fechaReclamoSugerencia;

        let comparacion:number=((+this.formoatoNumero(""+fechaReclamo))-(+this.formoatoNumero(""+this.formatoDate(hoy.toLocaleDateString()))))*-1;
        
        if(comparacion>=2 && (this.reclamosSugerencias[i].estado=="en proceso")){
          this.colores[i]="#ed6d60";
        }

        //botones de estado
          if (this.reclamosSugerencias[i].estado == "en proceso") {
            this.botonEstadoEnProceso[i] = true;
            this.botonEstadoResuelto[i] = false;
            this.botonResponderHabilitado[i] = true;
          }
          else {
            this.botonEstadoEnProceso[i] = false;
            this.botonEstadoResuelto[i] = true;
            this.botonResponderHabilitado[i] = false;
          }
    
      }
    });
    if (this.reclamosSugerencias.length==0){
      this.mensaje="* No tienes más reclamos ni sugerencias por revisar.";
      this.mostrarMensaje=true;
    }
  }

  //ordenarPorFecha: void -> number
  //Ordena los reclamos y sugerencia por fecha
  ordenarPorFecha(){
    this.reclamosSugerencias.sort(function(o1,o2){
      if(o1.fechaReclamoSugerencia.toLocaleString()>o2.fechaReclamoSugerencia.toLocaleString()){
        return 1;
      }else if(o1.fechaReclamoSugerencia.toLocaleString()<o2.fechaReclamoSugerencia.toLocaleString()){
        return -1;
      }
      return 0;
    });
  }

  //reclamosPrimero: void -> number
  //Muestra los reclamos primero
  reclamosPrimero(){
    this.reclamosSugerencias.sort(function(o1,o2){
      if(o1.tipo<o2.tipo){
        return 1;
      }else if (o1.tipo>o2.tipo){
        return -1;
      }
      return 0;
    });
    this.reclamosSugerencias.reverse();
  }

  //responderRS: ReclamoSugerencia -> void
  //Funcion que redirige a la vista de responder reclamo o sugerencia dependiendo del tipo de solicitud.
  responderRS(RSAresolver:ReclamoSugerencia){
    this.servicioRS.setTrabajador(this.infoTrabajador.idTrabajador,RSAresolver).subscribe(data=>{
      RSAresolver=data;
      if(RSAresolver.tipo=="Reclamo"){

        localStorage.setItem("Reclamo",JSON.stringify(RSAresolver));
        this.router.navigate(["empresa/responderReclamo"]);
      }
      else{
  
        localStorage.setItem("Sugerencia",JSON.stringify(RSAresolver));
        this.router.navigate(["empresa/responderSugerencia"]);
      }
    });
  }

  //irPerfil: void -> void
  //Redirige a la vista Perfil Empresa
  irPerfil(){
    this.router.navigate(["empresa/perfil"]);
  }

  //irSugerencia: void -> void
  //Redirige a la vista Lista Sugerencias Empresa
  irSugerencia(){
    this.router.navigate(["empresa/listaSugerencias"]);
  }

  //irReclamo: void -> void
  //Redirige a la vista Lista Reclamos Empresa
  irReclamo(){
    this.router.navigate(["empresa/listaReclamos"]);
  }

  //verEstadisticas: void -> void
  //Redirige a la vista Estadisticas
  verEstadisticas(){
    this.router.navigate(["empresa/estadisticas"]);
  }

  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
  }

  //cerrarSesion: void -> void
  //Vacia el localStorage para cerrar sesion y redirige a la vista Home Empresa
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['home_empresa']);
  }

  //home: void -> void
  //Redirige a la vista Home
  home(){
    this.router.navigate(['home']);
  }

  //homeEmpresa: void -> void
  //Redirige a la vista home empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }

  //irTrabajadores: void -> void
  //Redirige a la vista Lista Trabajadores
  irTrabajadores(){
    this.router.navigate(["empresa/listarTrabajadores"]);
  }
}
