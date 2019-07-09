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
  credenciales=new UsuarioRegistrado();
  errorMsg="";
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
  }
  enviarCredenciales(){
    this.credenciales.correo_usuario_r=this.correo;
    this.credenciales.password_usuario_r=this.pass;
    let email=this.credenciales.correo_usuario_r;
    if(this.service.logIn(this.credenciales).subscribe(data=>{this.credenciales=data;})){
      localStorage.setItem("Email", email);
      this.router.navigate(["perfil"]);
    }else {
      this.errorMsg="correo o contraseña incorrectos";
    }
  }

}
