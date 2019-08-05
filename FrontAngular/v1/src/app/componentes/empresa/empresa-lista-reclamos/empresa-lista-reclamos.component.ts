import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Empresa } from 'src/app/Modelo/Empresa';
import { Trabajador } from 'src/app/Modelo/trabajador';


 
@Component({
  selector: 'app-empresa-lista-reclamos',
  templateUrl: './empresa-lista-reclamos.component.html',
  styleUrls: ['./empresa-lista-reclamos.component.css']
})
export class EmpresaListaReclamosComponent implements OnInit {
  //atributos
  reclamos:ReclamoSugerencia[]=[];
  colores:string[]=[];
  administrador:boolean=false;
  infoTrabajador:Trabajador=JSON.parse(localStorage.getItem("trabajador"));

  constructor(private servicioTrabajador:TrabajadorServiceService,private router:Router,private servicioRS:RsServiceService) { }
 
  //formatoDate():string->string
  // este metodo invierte el formato de una fecha 
  //esto es nesesario por la forma en que la fecha es guardada en la vase de datos(de guarda de manera ingertida)
  //ejemplo: date= 17-07-2019; formatoDate(date) debuelve-> 2019-07-17
  formatoDate(date:string):string{
    let fechaSeparada=date.split("/");
    let fechaFinal:string[]=[]
    if(+fechaSeparada[0]<10&&+fechaSeparada[0]!=null){
      fechaFinal.push(fechaSeparada[0]);
    }
    else if(+fechaSeparada[0]!=null){
      fechaFinal.push(fechaSeparada[0]);
    }else{}

    if(+fechaSeparada[1]<10&&+fechaSeparada[1]!=null){
      fechaFinal.push(fechaSeparada[1]);
    }else if(+fechaSeparada[1]!=null){
      fechaFinal.push(fechaSeparada[1]);
    }else{}
   
    if(fechaFinal[0].length==10 ){
      fechaFinal=[]
      fechaSeparada=date.split("-");
      if(+fechaSeparada[0]<10){
        fechaFinal.push(fechaSeparada[0]);
      }
      else{
        fechaFinal.push(fechaSeparada[0]);
      }
  
      if(+fechaSeparada[1]<10){
        fechaFinal.push(fechaSeparada[1]);
      }else{
        fechaFinal.push(fechaSeparada[1]);
      }
      
    }
    fechaFinal.push(fechaSeparada[2]);
    let year=fechaFinal[2];
    let month=fechaFinal[1];
    let day=fechaFinal[0];
    let fechaCompleta=year+"-"+month+"-"+day;
    return fechaCompleta;

  }
  //fomratoNumero(string): string ->string
  //cambia el formato una fecha ingresada en string
  formatoNumero(date:string):string{
    
    let year=date.substr(0,4);
 
    let month=date.substr(5,2)
    let day=date.substr(8,2); 

    return year+""+month+""+day;
  }

  // este metodo es ejecutato al momento de iniciar el componente 
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
    // se obtiene los reclamos de una empresa en espesifico (en este caso la empresa a la que pertenece el trabajador )
    //esta informacion es obtenida a travez de la bariable local data 
    // luego se asigna el valor de data en la variable global reclamos (en el metoro de accede a la vatialble: this.reclmaos)
    this.servicioRS.getReclamoEmpresa(infoEmpresa.rutEmpresa).subscribe(data=>{
      this.reclamos=data;

      //de recorre la totalidad de los reclmaos para tener una ayuda visual al trbajador sobre cuales son los reclmaos mas "nuevos"
      // esto se deternmina en vase a la fecha en la que se realizo el reclamo en comparacion a la vecha actual 
      // en caso que la fecha de los reclmaos no sea la de hoy("hoy" es cualquier dia relativo al momento en que de ejecute el metodo)
      //se guardara en el areglo llamado "colores" en el indice i el color blanco(white) y en caso contrario verde(green) 
      let hoy=new Date();
      for(let i=0;i<this.reclamos.length;i++){
     
        if(this.reclamos[i].fechaReclamoSugerencia.toLocaleString()<this.formatoDate(hoy.toLocaleDateString())){
         
          this.colores[i]="white";
        }else{
          this.colores[i]="#a2ed6b";
        }
        let fechaResuelto=this.reclamos[i].fechaResuelto;
        let fechaReclamo=this.reclamos[i].fechaReclamoSugerencia;
        
        let comparacion:number=((+this.formatoNumero(""+fechaReclamo))-(+this.formatoNumero(""+this.formatoDate(hoy.toLocaleDateString()))))*-1;
        
        if(comparacion>=2 && (this.reclamos[i].estado=="en proceso")){
          this.colores[i]="#ed6d60";
        }
      }
    })
    
  }
  //responderReclamo(): ReclmaoSugerencia->vacio(redireccion responder reclamo)
  //al ejecutar el metodo responder reclamo, resive como parametro un objeto de tipo ReclamoSugerencia
  //estod datos son guardados en localStorage(para guardar un objeto en local storage es necesario convertit 
  //el objeto a string, para esto se usa el metodo stringify de la classe JSON)
  //una vez guardado se redirecciona al componente de responder reclamo 
  //este cmponente corresponde a la vista de trabajador de empresa
  responderReclamo(RSAresolver:ReclamoSugerencia){
 
    localStorage.setItem("Reclamo",JSON.stringify(RSAresolver));
    this.router.navigate(["empresa/responderReclamo"]);
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
  //verEstadisticas(): vavcio-> vacio
  //al llamar al metodo se redirecciona al componente estadisticas de empresa 
  verEstadisticas(){
    this.router.navigate(["empresa/estadisticas"]);
  }
  //cerrarSesion():vavio-> vacio
  //al ejecutar el metodo se borra la informacion de el localstorage y rediririge al componente home_empresa
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['home_empresa']);
  }
  //home(): vaicio ->vacio
  //al ejecutar el metodo redirige al componente home 
  home(){
    this.router.navigate(['home']);
  }
  //homeEmpresa(): vacio -> vacio
  //al llamar al metodo se redirecciona al componente home_empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  //irTrabajadores():vacio->vacio
  //redirige al componente trabajadores de empresa
  irTrabajadores(){
    this.router.navigate(["empresa/listarTrabajadores"]);
  }

}
