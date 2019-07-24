import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { RsServiceService } from 'src/app/Services/rs-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo:string;
  pass:string;

  idBusqueda:number;
  
  credenciales=new UsuarioRegistrado();
  errorMsg="";
  idbusqueda:number;
  constructor(private router:Router,private service:ServiceService, private serviceRS:RsServiceService) { }

  ngOnInit() {
  }

  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }

  enviarCredenciales(){
    this.credenciales.emailUsuario=this.correo;
    this.credenciales.passUsuario=this.pass;

    console.log("cosa email: "+this.correo)
    let email=this.credenciales.emailUsuario;
    try {
      this.service.logIn(this.credenciales).subscribe(data=>{
        let credenciales=data;
        if(credenciales == null){
          this.errorMsg="Correo o Contraseña incorrectos";
        }else {
          this.errorMsg = "";
          this.credenciales=credenciales;
          localStorage.setItem("nombre",this.credenciales.nombreUsuario);
          localStorage.setItem("apellido",this.credenciales.apellidoUsuario);
          localStorage.setItem("Email", email);
          localStorage.setItem("idUsuario",""+this.credenciales.rutUsuario);
          localStorage.setItem("fonoUsuario",""+this.credenciales.fonoUsuario);
          localStorage.setItem("generoUsuario", this.credenciales.generoUsuario);
          localStorage.setItem("fechaNacUsuario",""+this.credenciales.fechaNacUsuario); 

          this.router.navigate(["perfil"]);

        }
      })
    } catch (e) {
      this.errorMsg="Correo o Contraseña incorrectos";
    }finally{
      this.errorMsg="Correo o Contraseña incorrectos";
    }
    
  }

  registrar(){
    this.router.navigate(["registrar"]);
  }
   checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Gui�n
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y D�gito Verificador
    let cuerpo = valor.slice(0,-1);
    let dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el m�nimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular D�gito Verificador
    let suma = 0;
    let multiplo = 2;
    
    // Para cada d�gito del Cuerpo
    for(let i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el M�ltiplo Correspondiente
        let index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar M�ltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular D�gito Verificador en base al M�dulo 11
    let dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su D�gito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inv�lido"); return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es v�lido)
    rut.setCustomValidity('');
}
reclamo(){
  if(localStorage.getItem("Email")==null||localStorage.getItem("Email")=="anonimo"){
    this.router.navigate(["anonimo/realizar_reclamo"]);
  }else{
    this.router.navigate(["realizar_reclamo"]);

  }
}
  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  login(){
    this.router.navigate(["login"]);
  }
}
