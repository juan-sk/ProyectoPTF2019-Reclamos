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
  //atributos 
  correo:string;
  pass:string;
  idBusqueda:number;
  credenciales=new UsuarioRegistrado();
  errorMsg="";
  idbusqueda:number;

  constructor(private router:Router,private service:ServiceService, private serviceRS:RsServiceService) { }
  //este metodo se ejecuta al momento de iniciar el componente
  ngOnInit() {
  }
  //redirige al componente home empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  //enviarCredenciales void --> void
  //Toma el correo y pass encapsulados en el Usuario y los envia al back 
  enviarCredenciales(){
    this.credenciales.emailUsuario=this.correo;
    this.credenciales.passUsuario=this.pass;
    let email=this.credenciales.emailUsuario;
    try {
      this.service.logIn(this.credenciales).subscribe(data=>{
        let credenciales=data;
        if(credenciales == null){
          this.errorMsg="Correo o Contraseña incorrectos";
        }else {
          this.errorMsg = "";
          this.credenciales=credenciales;
          //se guarda la infomraion del usuario en el localstorage para que pueda ser usada 
          //en otros componentes
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
   //redirige al componente registro
  registrar(){
    this.router.navigate(["registrar"]);
  }
   checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guion
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Digito Verificador
    let cuerpo = valor.slice(0,-1);
    let dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el minimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular Digito Verificador
    let suma = 0;
    let multiplo = 2;
    
    // Para cada digito del Cuerpo
    for(let i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el M�ltiplo Correspondiente
        let index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Miltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Digito Verificador en base al Modulo 11
    let dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su D�gito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inv�lido"); return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es v�lido)
    rut.setCustomValidity('');
}
  //redirige al componente realizar reclamo
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
  //redirige al componente login
  login(){
    this.router.navigate(["login"]);
  }
    //redirige al componente realizar sugerencia
  irSugerencia(){
    if(localStorage.getItem("Email")==null||localStorage.getItem("Email")=="anonimo"){
      this.router.navigate(["anonimo/realizar_sugerencia"]);
    }else{
      this.router.navigate(["realizar_sugerencia"]);

    }
  }
  //redirige al componente sugerencia
  irNosotros(){
    this.router.navigate(["nuestro_equipo"]);
  }
  //redirige al home usuario
  home(){
    this.router.navigate(['home']);
  }
}
