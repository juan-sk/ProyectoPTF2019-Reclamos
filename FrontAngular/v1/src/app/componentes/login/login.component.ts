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
  
  credenciales=new UsuarioRegistrado();
  errorMsg="";
  idbusqueda:number;
  constructor(private router:Router,private service:ServiceService, private serviceRS:RsServiceService) { }

  ngOnInit() {
  }
  enviarCredenciales(){
    this.credenciales.emailUsuario=this.correo;
    this.credenciales.passUsuario=this.pass;

    console.log("cosa email: "+this.correo)
    let email=this.credenciales.emailUsuario;
    try {
      
    let resultado=this.service.logIn(this.credenciales).subscribe(data=>{
      this.credenciales=data;
      
      console.log("passss: "+this.credenciales.passUsuario);

      if(this.credenciales.passUsuario=="valido"){
        localStorage.setItem("Email", email);
        this.router.navigate(["perfil"]);
      }else {
        this.errorMsg="correo o contraseña incorrectos";
      }
    })
  } catch (Error ) {
    console.log("error de server: ");
    console.log(console.error(Error));
    
    this.errorMsg="correo o contraseña incorrectos";
  }
    
  }

  registrar(){
    this.router.navigate(["registrar"]);
  }

   buscarPorId(){
    this.serviceRS.getReclamo(this.idbusqueda);
  }

}
