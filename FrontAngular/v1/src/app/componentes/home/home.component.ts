import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idBusqueda:number;
  rs:ReclamoSugerencia;
  constructor(private router:Router, private service:RsServiceService) { }
  
  ngOnInit() {
    let nombre:string = localStorage.getItem('Email');
    if(nombre!="anonimo"&& nombre!=null){
      this.router.navigate(["perfil"]);
    }
  }
  //registrar():vacio->vacio
  //redirige al componente registrar
  registrar(){
    this.router.navigate(['registrar']);
  }
  //login():vacio-> vacio
  //redirige al componente login
  login(){
    this.router.navigate(['login']);
  }
  //homeEmpresa():vacio->vacio
  //redirige al componente home_empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  reclamo(){
    if(localStorage.getItem("Email")==null||localStorage.getItem("Email")=="anonimo"){
      this.router.navigate(["anonimo/realizar_reclamo"]);
    }else{
      this.router.navigate(["realizar_reclamo"]);

    }
  }
  home(){
    this.router.navigate(['home']);
  }
    
  
}
