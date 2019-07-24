import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { ServiceService } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ValidarRut } from 'src/app/funcionesDeValidacion/validarRUT';
import { ValidarTelefono } from 'src/app/funcionesDeValidacion/validarTELEFONO';
import { ValidarContrasena } from 'src/app/funcionesDeValidacion/validarContrasena';
import { ValidarCorreos } from 'src/app/funcionesDeValidacion/validarCorreos';
import { ValidarFecha } from 'src/app/funcionesDeValidacion/validarFecha';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { R3DelegatedFnOrClassMetadata } from '@angular/compiler/src/render3/r3_factory';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']})


export class RegistroUsuarioComponent implements OnInit {
  usuarioARegistrar:UsuarioRegistrado= new UsuarioRegistrado();
  nombre:string;
  apellido:string;
  rut:string;
  fecha:Date;
  fono:string;
  correo:string;
  correo2:string;
  pass:string;
  pass2:string;
  mensaje:string="";
  idBusqueda:number;
  generos:string[]=["masculino","femenino","otro","prefiero no decirlo","Dinosaurio"];
  genero:string;
  errRut:string;
  errPass:string;
  errGenero:string;
  errorTel:string;
  errorEmail:string;
  errorFecha:string;
  sexo:string;
  formato:DataView

  formRegistro :FormGroup;
  
 regexp: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

constructor(private router:Router,private service:ServiceService,  private serviceRS:RsServiceService, private formBuilder: FormBuilder) { }

ngOnInit() {
      this.formRegistro = this.formBuilder.group({ 
      Nombre:[ '', Validators.required ],
      Apellido:[ '', Validators.required ],
      Rut:['',Validators.required],
      Fecha:['',Validators.required],
      Fono:['',Validators.required],
      Genero:['',Validators.required],
      Correo:['',Validators.required],
      Correo2:['',Validators.required],
      Pass:['',Validators.required],
      Pass2:['',Validators.required]});
      
    }

    registro(){
      this.usuarioARegistrar.nombreUsuario=this.nombre;
      this.usuarioARegistrar.apellidoUsuario=this.apellido;
      this.usuarioARegistrar.rutUsuario=this.formatRut(this.rut);
      this.usuarioARegistrar.fechaNacUsuario= this.fecha;
      this.usuarioARegistrar.fonoUsuario=this.formatFono(this.fono);
      this.usuarioARegistrar.generoUsuario=this.genero;
      this.usuarioARegistrar.emailUsuario=this.correo;
      this.usuarioARegistrar.passUsuario=this.pass;  
      this.service.crearUsuarioPrueba(this.usuarioARegistrar).subscribe(data=>{
        alert("se agrego correctamente");
      })
      this.router.navigate(["perfil"]); 
      localStorage.setItem("id", ""+this.usuarioARegistrar.rutUsuario);
    }
  
  //boton redirecciona a empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }

  //boton log in
  login(){
    this.router.navigate(['login']);
  }

  formatoDate(date:Date):string{
    let year = date.toLocaleString();
    year=year.substr(0,4);
      return year;
  }

  validarfecha(){
    let validar:ValidarFecha  = new ValidarFecha();
    let resultado = validar.esValido(this.formatoDate(this.fecha),this.formatoDate(this.fecha));
    if(resultado.result ){
      this.errorFecha=resultado.message;
    }else{
      this.errorFecha=resultado.message;
    }
  }

  validarCorreo(){
      let validar:ValidarCorreos  = new ValidarCorreos();
      let resultado = validar.esValido( this.correo,this.correo2);
      alert(""+(new Date().getFullYear().toLocaleString()));
      if(resultado.result ){
        this.errorEmail="";
      }else{
        this.errorEmail=resultado.message;
      }
    }

    validarPass(){
      let validar:ValidarContrasena  = new ValidarContrasena();
      let resultado = validar.esValido( this.pass,this.pass2);
      if(resultado.result ){
        this.errPass="";
      }else{
        this.errPass=resultado.message;
      }
    }

  validateRut(){
  
    let validar:ValidarRut  = new ValidarRut();
    let resultado = validar.esValido( this.rut);
    if(resultado.result ){
      this.errRut="";
    }else{
      this.errRut=resultado.message;
    }
  }

  formatFono(fono:string):number{
    let numFono;
    numFono = fono.substr(0,9);
    return Number(numFono);
  }

  formatRut(rut:string):number{
    let rutNumeros;
    if(rut.length>9){
      rutNumeros= rut.substr(0,8); 
   }else{
    rutNumeros= rut.substr(0,7); 
   }
    console.log (rutNumeros)
    return Number(rutNumeros);
  }
  reclamo(){
    this.router.navigate(["anonimo/realizar_sugerencia"]);
  }
  validarTelefono(){
    let validar:ValidarTelefono = new ValidarTelefono();
    let resultado = validar.checkTelefono( this.usuarioARegistrar.fonoUsuario);
    if(resultado.result ){
      this.errorTel="" ;
    }else{
      this.errorTel=resultado.message;
    }
 }
  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  //registrar():vacio->vacio
  //redirige al componente registrar
  registrar(){
    this.router.navigate(['registrar']);
  } 
  irSugerencia(){
    if(localStorage.getItem("Email")==null||localStorage.getItem("Email")=="anonimo"){
      this.router.navigate(["anonimo/realizar_sugerencia"]);
    }else{
      this.router.navigate(["realizar_sugerencia"]);

    }
  }
}

