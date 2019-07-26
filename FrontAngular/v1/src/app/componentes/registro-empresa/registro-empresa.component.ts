import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Modelo/Empresa';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Router } from '@angular/router';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { ValidarRut } from 'src/app/funcionesDeValidacion/validarRUT';
import { ValidarContrasena } from 'src/app/funcionesDeValidacion/validarContrasena';



@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']})


export class RegistroEmpresaComponent implements OnInit {
  empresa:Empresa=new Empresa();
  trabajador:Trabajador=new Trabajador();
  rutEmpresa:string;
  nombreEmpresa:string;
  emailEmpresa:string;
  nombreTrabajador:string;
  apellidoTrabajador:string;
  tipoTrabajador:string;
  passTrabajador:string;
  pass2Trabajador:string;
  idBusqueda:number;
  errRut:string;
  errPass:string;

  formRegistroEmpresa: FormGroup;

  regexp: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

  constructor(private router:Router, private empresaService:EmpresaServiceService,private trabajadorServicio:TrabajadorServiceService, private formBuilder:FormBuilder) { }


  ngOnInit() {
    this.formRegistroEmpresa = this.formBuilder.group({
  
    RutEmpresa:['', Validators.required],
    NombreEmpresa:['', Validators.required],
    EmailEmpresa:['', Validators.required],
    NombreTrabajador:['', Validators.required],
    ApellidoTrabajador:['', Validators.required],
    TipoTrabajador:['', Validators.required],
    PassTrabajador:['', Validators.required],
    Pass2Trabajador:['', Validators.required]});
    }

    registrar(){
      this.empresa.rutEmpresa=this.formatRut(this.rutEmpresa);
      this.empresa.nombreEmpresa=this.nombreEmpresa;
      this.empresa.emailEmpresa=this.emailEmpresa;
      this.trabajador.nombreTrabajador=this.nombreTrabajador;
      this.trabajador.apellidoTrabajador=this.apellidoTrabajador;
      this.trabajador.tipoTrabajador= "administrador";
      this.trabajador.passTrabajador=this.passTrabajador;
      this.trabajador.empresa=this.empresa.nombreEmpresa;
      this.empresaService.crearEmpresa(this.empresa).subscribe(params=>{})
      this.trabajadorServicio.crearTrabajador(this.trabajador).subscribe(data=>{})
      this.router.navigate(['empresa/login']);
    } 

    validateRut(){
  
      let validar:ValidarRut  = new ValidarRut();
      let resultado = validar.esValido( this.rutEmpresa);
      if(resultado.result ){
        this.errRut="";
      }else{
        this.errRut=resultado.message;
      }
    }
 
    formatRut(rut:string):number{
      let rutNumeros;
      if(rut.length>=9){
        rutNumeros= rut.substr(0,8); 
     }else{
      rutNumeros= rut.substr(0,7); 
     }
      return Number(rutNumeros);
    }
    
   validarPass(){
      let validar:ValidarContrasena  = new ValidarContrasena();
      let resultado = validar.esValido( this.passTrabajador,this.pass2Trabajador);
      if(resultado.result ){
        this.errPass="";
      }else{
        this.errPass=resultado.message;
      }
    } 

  loginEmpresa(){
  	this.router.navigate(['empresa/login']);
  }
 
  homeEmpresa(){
  	this.router.navigate(['home_empresa']); 
  }

  RegistrarEmpresa(){
    this.trabajadorServicio.crearTrabajador(this.trabajador).subscribe();
    this.empresaService.crearEmpresa(this.empresa);
  }
  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
  }
  home(){
    this.router.navigate(['home']);
  }
  registrarEmpresa(){
    this.router.navigate(["empresa/registro"]);
  }
  irNosotros(){
    this.router.navigate(["nuestro_equipo"]);
  }
}
