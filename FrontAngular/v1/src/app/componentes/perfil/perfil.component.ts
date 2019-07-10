import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router:Router) { }
  nombre:string = localStorage.getItem('Email');

  ngOnInit() {
    if(this.nombre==null){
      this.router.navigate(["home"]);
    }
  }

  realizarReclamo() {
  	this.router.navigate(['realizar_reclamo']);
  }

  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
  }
}
