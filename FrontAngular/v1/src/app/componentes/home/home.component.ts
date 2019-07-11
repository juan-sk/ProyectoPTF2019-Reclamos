import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idbusqueda:number;

  constructor(private router:Router, private service:RsServiceService) { }
  nombre:string = localStorage.getItem('Email');

  ngOnInit() {
    if(this.nombre!="anonimo"){
      this.router.navigate(["perfil"]);
    }
  }
  registrar(){
    this.router.navigate(['registrar']);
  }
  login(){
    this.router.navigate(['login']);
  }

  buscarPorId(){
    this.service.getReclamo(this.idbusqueda);
  }
}
