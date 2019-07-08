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
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
  }
  enviarCredenciales(){
    let id=localStorage.getItem("id");
  
    this.service.logIn(this.credenciales).subscribe(data=>{
      data=this.credenciales;
      
    })
  }

}
