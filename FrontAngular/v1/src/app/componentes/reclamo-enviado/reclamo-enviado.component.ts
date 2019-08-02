import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { ConditionalExpr } from '@angular/compiler';
import { Empresa } from 'src/app/Modelo/Empresa';
import { EnviarEmailService } from 'src/app/Services/enviar-email.service';

@Component({
  selector: 'app-reclamo-enviado',
  templateUrl: './reclamo-enviado.component.html',
  styleUrls: ['./reclamo-enviado.component.css']
})
export class ReclamoEnviadoComponent implements OnInit {
  //atributos
  idBusqueda:number;
  nombreEmpresa:string;
  empresa:Empresa=new Empresa();
  nombreUsuario:String;
  apellidoUsuario:String;
  rutUsuario:number;

  constructor(private router:Router,private servicioEmpresa:EmpresaServiceService, private servicioMail:EnviarEmailService) { }
  //este metodo se ejecuta al iniciar el componente
  ngOnInit() {
    this.nombreUsuario=localStorage.getItem("nombre");
    this.apellidoUsuario=localStorage.getItem("apellido");
  }

  //cerrarSesion: void -> void
  //Muta el email activo a anonimo (para cerrar sesion) y redirige a la vista home.
  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }
  
  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){

    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  //formatoParrafo():string->string[]
  //genera un areglo de string con el tamaño necesario para
  //que no se alga del pdf 
  formatoParafo(cadena:string):string[]{
    let parafo:string[]=[];
    let cantfiilas=Number(cadena.length/42)+1;
    let  LETRASPORFILA:number=70;
    let indice:number=LETRASPORFILA;
    let inicio:number=0;


    for(let i=0;i<cantfiilas;i++){
      
      parafo.push(cadena.substring(inicio,indice));
      if(inicio<cadena.length){
        inicio+=LETRASPORFILA;
        indice+=LETRASPORFILA;
      }
      else{
        inicio+=LETRASPORFILA;
        indice=cadena.length;
      }
    }
    return parafo;
  }
  //generarPdf():vacio->vacio
  //genera el comprobante en pdf de el reclamo o sugerencia
  generarPdf(){
    
    //informacion del reclamo o sujerencia
    let titulo=localStorage.getItem("tituloRS");
    let idEmpresa=localStorage.getItem("empresa");
    let id=localStorage.getItem("idRS");
    let fecha=localStorage.getItem("fecha");
    let detalle=localStorage.getItem("detalleRS");
    let tipo=localStorage.getItem("tipo");
    try {
      this.servicioEmpresa.nombreEmpresa(+idEmpresa).subscribe(data=>{
        this.empresa=data;
        let doc = new jsPDF();
        //añadir imagen (logo superior)
        let logo=new Image();
        logo.src="../../../assets/logo.png";
        doc.addImage(logo,"png",6,6,40,40);
        //linea de separacion entre "header" y "body"
        doc.line(6, 54, 200, 54)
    
        doc.setFontSize(22);
        doc.text(100,30,"ID: "+id);
        doc.setFontSize(12);
        doc.text(100,40,"tipo: "+tipo);
        doc.text(10,60,"fecha: "+fecha);
        
        doc.setFontSize(16);
        doc.text(10,70,"Empresa:"+this.empresa.nombreEmpresa);
        doc.text(10,80,"Titulo: "+titulo);
        doc.text(10, 90, "Detalle:");
        doc.setFontSize(12);
        let parafo=this.formatoParafo(detalle);
        
        let posicion=100;
        for(let i=0;i<parafo.length;i++){
          doc.text(10,posicion,parafo[i]);
          posicion+=10;
        }
        doc.setFontSize(16);
        //linea de separacion entre "body" y "footer"
        doc.line(6, 280, 200, 280)
        doc.setFontSize(12);
        doc.text(80,290,"www.g3reclamos.cl");
        //asignacion de nombre al pdf
        let nombreArchivo:string="G3_"+fecha+"_"+id+".pdf";
        //metodo para generar el pdf
        doc.save(nombreArchivo);
      });
      
    } catch (error) {
     this.empresa.nombreEmpresa="no se puedo ver empresa"
    }
  }
  //realizarSugerencia: void -> void
  //Redirige a vista Realizar Sugerencia
  realizarSugerencia(){
    this.router.navigate(["realizar_sugerencia"]);
  }
  //realizarReclamo: void -> void
  //Redirige a vista Realizar Reclamo
  realizarReclamo(){
    this.router.navigate(["realizar_reclamo"]);
  }
  //irNosotros: void -> void
  //Redirige a vista Nosotros
  irNosotros(){
    this.router.navigate(["nuestro_equipo"]);
  }
  //irSugerencia: void -> void
  //Redirige a vista Realizar Sugerencia
  irSugerencia(){
    if(localStorage.getItem("Email")==null||localStorage.getItem("Email")=="anonimo"){
      this.router.navigate(["anonimo/realizar_sugerencia"]);
    }else{
      this.router.navigate(["realizar_sugerencia"]);

    }
  }
  //irReclamo: void -> void
  //Redirige a vista Realizar Reclamo
  irReclamo(){
    if(localStorage.getItem("Email")==null||localStorage.getItem("Email")=="anonimo"){
      this.router.navigate(["anonimo/realizar_reclamo"]);
    }else{
      this.router.navigate(["realizar_reclamo"]);

    }
  }
  //home: void -> void
  //Redirige a vista Home
  home(){
    this.router.navigate(['home']);
  }
    
  
}
