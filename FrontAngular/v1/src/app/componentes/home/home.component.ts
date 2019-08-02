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
  //atributos 
  idBusqueda:number;
  rs:ReclamoSugerencia;
  constructor(private router:Router, private service:RsServiceService) { }
  //este metodo se ejecuta al momento de iniciar el componente
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
  //redirige al componente reclamo
  irReclamo(){
    if(localStorage.getItem("Email")==null||localStorage.getItem("Email")=="anonimo"){
      this.router.navigate(["anonimo/realizar_reclamo"]);
    }else{
      this.router.navigate(["realizar_reclamo"]);

    }
  }
  //redirige al componente sugerencia
  irSugerencia(){
    if(localStorage.getItem("Email")==null||localStorage.getItem("Email")=="anonimo"){
      this.router.navigate(["anonimo/realizar_sugerencia"]);
    }else{
      this.router.navigate(["realizar_sugerencia"]);

    }
  }
  //redirige al componente reclamo anonimo
  reclamoanonimo() {
    this.router.navigate(['anonimo/realizar_reclamo']);
  }
  //redirige al componente home
  home(){
    this.router.navigate(['home']);
  }
  //redirige al componente nosotros
  irNosotros(){
    this.router.navigate(["nuestro_equipo"]);
  }
  
}
