import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo:string;
  pass:string;
  si;
  credenciales=new UsuarioRegistrado();
  errorMsg="";
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
  }
  enviarCredenciales(){
    this.credenciales.emailUsuario=this.correo;
    this.credenciales.passUsuario=this.pass;
    let si2;
    console.log("cosa email: "+this.correo)
    let email=this.credenciales.emailUsuario;
    let resultado=this.service.logIn(this.credenciales).subscribe(data=>{
      this.si=data;//this.credenciales=data;
      si2=data
      console.log("data: "+data);
      if(Boolean(data)){
        localStorage.setItem("Email", email);
        this.router.navigate(["perfil"]);
      }else {
        this.errorMsg="correo o contraseña incorrectos";
      }
    })
    console.log("resiltado: "+resultado);
      console.log("estado de si: "+this.si);
    
  }

}
