import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { ServiceService } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ValidarRut } from 'src/app/funcionesDeValidacion/validarRUT';
import { ValidarTelefono } from 'src/app/funcionesDeValidacion/validarTELEFONO';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']})


export class RegistroUsuarioComponent implements OnInit {
  usuarioARegistrar:UsuarioRegistrado= new UsuarioRegistrado();
  nombre:string;
  apellido:string;
  rut:string;
  Fecha:Date;
  fono:string;
  correo:string;
  correo2:string;
  pass:string;
  pass2:string;
  mensaje:string="";
  idBusqueda:number;
  generos:string[]=["masculino","femenimo","otro","prefiero no decirlo"];
  genero:string;
  errRut:string;
  errGenero:string;
  errorTel:String;
  errorEmail:string;

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
  
  //boton redirecciona a empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }

  //boton log in
  login(){
    this.router.navigate(['login']);
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

  validarTelefono(){
  let validar:ValidarTelefono = new ValidarTelefono();
  let resultado = validar.checkTelefono( this.usuarioARegistrar.fonoUsuario);
  if(resultado.result ){
    this.errorTel="" ;
  }else{
    this.errorTel=resultado.message;
  }
} 

    registro(){
      this.usuarioARegistrar.nombreUsuario=this.nombre;
      this.usuarioARegistrar.apellidoUsuario=this.apellido;
      this.usuarioARegistrar.rutUsuario=this.formatRut(this.rut);
      this.usuarioARegistrar.fechaNacUsuario= new Date(1997,12,23);
      this.usuarioARegistrar.fonoUsuario=this.formatFono(this.fono);
      this.usuarioARegistrar.generoUsuario="mono";
      this.usuarioARegistrar.emailUsuario=this.correo;
      this.usuarioARegistrar.passUsuario=this.pass;  

      console.log(this.nombre);
      console.log(this.apellido);
      console.log(this.rut);
      console.log(this.fono);
      console.log(this.correo);
      console.log(this.pass);


      this.service.crearUsuarioPrueba(this.usuarioARegistrar).subscribe(data=>{
        alert("se agrego correctamente");
      })
      this.router.navigate(["perfil"]); 
      localStorage.setItem("id", ""+this.usuarioARegistrar.rutUsuario);
    }
  }

