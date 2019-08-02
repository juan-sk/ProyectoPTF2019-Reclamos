import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { Empresa } from 'src/app/Modelo/Empresa';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  //atributos
  administrador:boolean=false;
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
  ReclamosSugerencias:ReclamoSugerencia[]=[];

  constructor(private router:Router,private servicioRS:RsServiceService){}

  //opciones grafico reclamo Vs sugerencia (codigo = rVSs)
  public rVSsOptions: ChartOptions = {
   responsive: true,
   legend: {
     position: 'left',
     labels: {
        fontColor: 'black',
     }
   },
   plugins: {
     datalabels: {
       formatter: (value, ctx) => {
         const label = ctx.chart.data.labels[ctx.dataIndex];
         return label;
       },
     },
   }
 };
 public rVSsLabels: Label[] = ['Reclamos', 'Sugerencias'];
 public rVSsData: number[] = [0, 0];
 public rVSsType: ChartType = 'pie';
 public rVSsLegend = true;
 public rVSsPlugins = 0;//[pluginDataLabels];
 public rVSsColors = [
   {
     backgroundColor: ['rgba(199,229,255,0.6)', 'rgba(25,95,150,0.6)'],//rgba(red,green,blue,opacidad)
   },
 ];
 //#########################################################################################
 
  //opciones grafico reclamo resuelto Vs reclamo no resuelto (codigo = rVSs)
  public rRVSrNrOptions: ChartOptions = {
    responsive: true,
    legend: {
     position: 'left',
     labels: {
        fontColor: 'black',
     }
   },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public  rRVSrNrLabels: Label[] = ['Reclamos resueltos', 'Reclamos no resueltos'];
  public  rRVSrNrData: number[] = [0, 0];
  public  rRVSrNrType: ChartType = 'pie';
  public  rRVSrNrLegend = true;
  public  rRVSrNrPlugins = 0;//[pluginDataLabels];
  public  rRVSrNrColors = [
    {
      backgroundColor: ['rgba(255,199,200,0.6)', 'rgba(150,25,70,0.6)'],//rgba(red,green,blue,opacidad)
    },
  ];
  //#########################################################################################
  //opciones grafico sugerencias resueltas Vs sugerencias no resueltas (codigo = sRVSsNr)
  public sRVSsNrOptions: ChartOptions = {
    responsive: true,
    legend: {
     position: 'left',
     labels: {
        fontColor: 'black',
     }
   },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public  sRVSsNrLabels: Label[] = ['Sugerencias resueltas', 'Sugerencias no resueltas'];
  public  sRVSsNrData: number[] = [0, 0];
  public  sRVSsNrType: ChartType = 'pie';
  public  sRVSsNrLegend = true;
  public  sRVSsNrPlugins = 0;//[pluginDataLabels];
  public  sRVSsNrColors = [
    {
      backgroundColor: ['rgba(199,229,255,0.6)', 'rgba(25,95,150,0.6)'],//rgba(red,green,blue,opacidad)
    },
  ];
  //#########################################################################################
  //opciones grafico SLAsug (codigo = SLAsug)
  public SLAsugOptions: ChartOptions = {
    responsive: true,
    legend: {
     position: 'left',
     labels: {
        fontColor: 'black',
     }
   },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public  SLAsugLabels: Label[] = ['SLA OK', 'ATRASO'];
  public  SLAsugData: number[] = [0, 0];
  public  SLAsugType: ChartType = 'pie';
  public  SLAsugLegend = true;
  public  SLAsugPlugins = 0;//[pluginDataLabels];
  public  SLAsugColors = [
    {
      backgroundColor: ['rgba(255,199,200,0.6)', 'rgba(150,25,70,0.6)'],//rgba(red,green,blue,opacidad)
    },
  ];
  
  //cantReclamosResueltos(): ReclamoSugerencia[] ->number
  //devuelve la cantidad de reclamos resueltos 
  cantReclamosResueltos(reclamos:ReclamoSugerencia[]){
    let cantReclamosResueltos:number=0;
    for(let i=0;i<reclamos.length;i++){
      if(reclamos[i].estado=="resuelto"){
        cantReclamosResueltos++;
      }
    }
    return cantReclamosResueltos;
  }
  cantSugerenciasResueltas(Sugerencias:ReclamoSugerencia[]){
    let cantReclamosResueltos:number=0;
    for(let i=0;i<Sugerencias.length;i++){
      if(Sugerencias[i].estado=="resuelto"){
        cantReclamosResueltos++;
      }
    }
    return cantReclamosResueltos;
  }

  formatoDatosGrafico(cantResueltos,arr:ReclamoSugerencia[]):number[]{
    let nuevoArreglo:number[]=[];
    nuevoArreglo.push(cantResueltos);
    nuevoArreglo.push(arr.length-cantResueltos);
 
    return nuevoArreglo;
  }

  //este metodo se ejecuta al iniciar el componente 
 ngOnInit() {
   //se utiliza el metodo parse de la calse JSON para convertir la informacion
    // guardada en localstorage en el "campo" trabajador a un objeto de tipo Trabajador
    //esta informacion es guardada al momento tener un login exitoso
    let infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));
    //se utiliza el metodo parse de la calse JSON para convertir la informacion
    // guardada en localstorage en el "campo" empresa a un objeto de tipo Empresa
    //esta informacion es guardada al momento tener un login exitoso
    let infoEmpresa:Empresa= JSON.parse(localStorage.getItem("empresa"));

    if (infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
    this.servicioRS.getSugerenciaEmpresa(infoEmpresa.rutEmpresa).subscribe(data=>{
    
      this.sRVSsNrData=this.formatoDatosGrafico(this.cantSugerenciasResueltas(data),data);
      this.SLAsugData = this.formatoSLA(data);


    });
    this.servicioRS.getReclamoEmpresa(infoEmpresa.rutEmpresa).subscribe(data=>{
      this.rRVSrNrData=this.formatoDatosGrafico(this.cantReclamosResueltos(data),data);
    });

    this.servicioRS.getEstadistica(infoEmpresa.rutEmpresa).subscribe(data=>{
      this.rVSsData=data;
    });


 }
//descargarInforme():vacio ->vacio
//este metodo genera el documentto pdf con los graficos incluidos
//una vez generado de procede a la descarga
descargarInforme(){
  let reclamosVSsugerenciaData = this.rVSsData;
  let reclamoRVSReclamoNoR=this.rRVSrNrData;
  let SugerenciaRVSSugerenciaNoR=this.sRVSsNrData;
 
  html2canvas(document.getElementById('chart-rVSs')).then(function(canvas1) {
    html2canvas(document.getElementById('chart-rRVSrNr')).then(function(canvas2) {
      html2canvas(document.getElementById('chart-sRVSsNr')).then(function(canvas3) {
        let fecha=new Date();

        let img1 = canvas1.toDataURL("image/png");
        let img2 = canvas2.toDataURL("image2/png");
        let img3 = canvas3.toDataURL("image3/png");
        var doc = new jsPDF();
        //################--pagina 1--########################3
        //añadir imagen (logo superior)
        let logo=new Image();
        logo.src="../../../assets/logo.png";
        doc.addImage(logo,"png",6,6,40,40);
        
        //linea de separacion entre "header" y "body"
        doc.line(6, 54, 200, 54)
        doc.text(6,64,"Informe de resultados")
        doc.text(6,74,"Grafico Reclamos Vs Sugerencias");
        doc.addImage(img1,'PNG',6,74,180,100);
     
     
        doc.text(6,185,"Reclamos:     "+reclamosVSsugerenciaData[0]);
        doc.text(6,192,"Sugerencias : "+reclamosVSsugerenciaData[1]);

        doc.text(10,275,"Fecha: "+fecha);
        //linea de separacion entre "body" y "footer"
        doc.line(6, 280, 200, 280)
        doc.setFontSize(12);
        doc.text(80,290,"www.g3reclamos.cl");
        //################--pagina 2--########################3
        doc.addPage();
        doc.setFontSize(14);
        doc.addImage(logo,"png",6,6,40,40);
        
        //linea de separacion entre "header" y "body"
        doc.line(6, 54, 200, 54)
        doc.text(6,64,"Informe de resultados")
        doc.text(6,74,"Grafico Reclamos resueltas  Vs Reclamos no resueltas");
        doc.addImage(img2,'PNG',6,74,180,100);

        doc.text(6,185,"Reclamos Resueltos:    "+reclamoRVSReclamoNoR[0]);
        doc.text(6,192,"Reclamos no Resueltos: "+reclamoRVSReclamoNoR[1]);

        doc.text(10,275,"Fecha: "+fecha);
        //linea de separacion entre "body" y "footer"
        doc.line(6, 280, 200, 280)
        doc.setFontSize(12);
        doc.text(80,290,"www.g3reclamos.cl");

        //################--pagina 3--########################3
        doc.addPage();
        doc.setFontSize(14);
        doc.addImage(logo,"png",6,6,40,40);
        
        //linea de separacion entre "header" y "body"
        doc.line(6, 54, 200, 54)
        doc.text(6,64,"Informe de resultados")
        doc.addImage(img3,'PNG',6,74,180,100);
        doc.text(6,74,"Grafico Sugerencias resueltas  Vs Sugerencias no resueltas");
        doc.text(6,178,"Detalle:");
        doc.text(6,185,"Sugerencias Resueltas:    "+SugerenciaRVSSugerenciaNoR[0]);
        doc.text(6,192,"Sugerencias no Resueltas: "+SugerenciaRVSSugerenciaNoR[1]);
        
        doc.text(10,275,"Fecha: "+fecha);
        //linea de separacion entre "body" y "footer"
        doc.line(6, 280, 200, 280)
        doc.setFontSize(12);
        doc.text(80,290,"www.g3reclamos.cl");
        //asignacion de nombre al pdf
        let nombreArchivo:string="G3_Informe_"+fecha+".pdf";
        doc.save(nombreArchivo);
      });
    });
  });
}
  //irPerfil(): vavio->vacio (redireccion a componente perfil empresa)
  //al llamar el metodo se realida el redireccionamiento al componente perfil-empresa
  //a travez del path empreza/perfil, este componente es parte de la vista de trabajador de la empresa
  irPerfil(){
    this.router.navigate(["empresa/perfil"]);
  }
  //irSugerencia(): vavio->vacio (redireccion a componente listar sugerencias)
  //al llamar el metodo se realida el redireccionamiento al componente listar sugerencia
  //a travez del path empreza/listarSugerencias, este componente es parte de la vista de trabajador de la empresa
  irSugerencia(){
    this.router.navigate(["empresa/listaSugerencias"]);
  }
  //irReclamo(): vavio->vacio (redireccion a componente listar reclmaos)
  //al llamar el metodo se realida el redireccionamiento al componente listar reclamo
  //a travez del path empreza/listaReclamos, este componente es parte de la vista de trabajador de la empresa
  irReclamo(){
    this.router.navigate(["empresa/listaReclamos"]);
  }
  //verEstadisticas():vacio->vacio
  //redirecciona al componente estadisticas de empresa
  verEstadisticas(){
    this.router.navigate(["empresa/estadisticas"]);
  }

  //irTrabajadores():vacio->vacio
  //redirige al componente trabajadores de empresa
  irTrabajadores(){
    this.router.navigate(["empresa/listarTrabajadores"]);
  }
  
  //cerrarSesion():vavio-> vacio
  //al ejecutar el metodo se borra la informacion de el localstorage y rediririge al componente home_empresa
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['home_empresa']);
  }
  //formatoSLA(): ReclamoSugerencia[]->number[]
  //devuelve un areglo de numeros con fomrato [numero,numero]
  //con los valores de sla en teimpo y sla fuera de tiempo
  formatoSLA(rsArreglo:ReclamoSugerencia[]):number[] {
    let slaGood: number = 0;
    let slaBad: number = 0;
    let rsArregloRtn: number[]=[];

    for (let i = 0; i<rsArreglo.length; i++){
      let fechaResuelto=""+rsArreglo[i].fechaResuelto;
      let fechaReclamo=""+rsArreglo[i].fechaReclamoSugerencia;

      let comparacion:number=((+this.formatoNumero(""+fechaReclamo))-(+this.formatoNumero(""+this.formatoDate(fechaResuelto)))*-1);
      
      if (comparacion <= 2) {
        slaGood++;
      } 
      else {
        slaBad++;
      }
    }
    rsArregloRtn.push(slaGood);
    rsArregloRtn.push(slaBad);

    return rsArregloRtn;
  }
  //formatoNumero(string): string->string
  //recive como parametro un objeto de strgin que viene del con el formato de 
  // date.toLocateDateStirng()
  // el cual es cambiado para poder ser comparado posterior mente 
  // 02-02-1992 devuelve 19920202
  formatoNumero(date:string):string{
    let year=date.substr(0,4);
    let month=date.substr(5,2)
    let day=date.substr(8,2); 
    return year+""+month+""+day;
  }
  //formatoDate():string->string
  // este metodo invierte el formato de una fecha 
  //esto es nesesario por la forma en que la fecha es guardada en la vase de datos(de guarda de manera ingertida)
  //ejemplo: date= 17-07-2019; formatoDate(date.toLocateDateString()) devuelve-> 2019-07-17
  formatoDate(date:string):string{
    let year=date.substr(6,10);
    let month=date.substr(3,2)
    let day=date.substr(0,2);
    return year+"-"+month+"-"+day;

  }
}
