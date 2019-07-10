import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router:Router, private serviceRS:RsServiceService) { }
  nombre:string = localStorage.getItem('Email');
    idbusqueda:number;

  ngOnInit() {
    if(this.nombre=="anonimo"){
      this.router.navigate(["home"]);
    }
  }

  realizarReclamo() {
  	this.router.navigate(['realizar_reclamo']);
  }

  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
  }

   buscarPorId(){
    this.serviceRS.getReclamo(this.idbusqueda);
  }
}
