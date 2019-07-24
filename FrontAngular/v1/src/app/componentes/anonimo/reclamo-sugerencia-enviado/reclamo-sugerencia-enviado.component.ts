import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Empresa } from 'src/app/Modelo/Empresa';
import * as jsPDF from 'jspdf';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
@Component({
  selector: 'app-reclamo-sugerencia-enviado',
  templateUrl: './reclamo-sugerencia-enviado.component.html',
  styleUrls: ['./reclamo-sugerencia-enviado.component.css']
})
export class ReclamoSugerenciaEnviadoComponent implements OnInit {
  idBusqueda:number;
  rs:ReclamoSugerencia;

  constructor(private router:Router,private servicioEmpresa:EmpresaServiceService) { }

  empresa:Empresa=new Empresa();
  ngOnInit() {
  }
  registrarse(){
    this.router.navigate(["registrar"]);
  }
  login(){
    this.router.navigate(['login']);
  }
  //homeEmpresa():vacio->vacio
  //redirige al componente home_empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
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

  generarPdf(){
    
    //informacion del reclamo o sujerencia
    let titulo=localStorage.getItem("tituloRS");
    let idEmpresa=localStorage.getItem("empresa");
    let id=localStorage.getItem("idRS");
    let fecha=localStorage.getItem("fecha");
    let detalle=localStorage.getItem("detalleRS");
    let tipo=localStorage.getItem("tipo");
    //fecha.toDateString().replace(" ","_")// convertir objeto Date a string

    try {
      console.log(localStorage.getItem("empresa"));
      console.log(this.servicioEmpresa.nombreEmpresa(+idEmpresa).subscribe(data=>{
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
      }));
      
    } catch (error) {
     this.empresa.nombreEmpresa="no se puedo ver empresa"
    }
  }
  registrar(){
    this.router.navigate(["registrar"]);
  }
  irNosotros(){
    this.router.navigate(["nuestro_equipo"]);
  }
  home(){
    this.router.navigate(['home']);
  }
} 
