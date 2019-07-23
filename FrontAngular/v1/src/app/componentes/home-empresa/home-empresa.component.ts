import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { RsServiceService } from 'src/app/Services/rs-service.service';


@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.css']
})
export class HomeEmpresaComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService, private serviceRS:RsServiceService) { }
  idBusqueda:number;
  ngOnInit() {
  }
  //HomeEmpresa():vacio->vacio
  //redirige al componente home_empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  //registrar(): vacio->vacio
  //redirige a la url empresa/registro
  //que hace referencia al componente registro-empresa
  //la referencia esta declarada en el archivo app-routing.module
  registrarEmpresa(){
    this.router.navigate(["empresa/registro"]);
  }
 //loginEmpresa(): vacio->vacio
  //redirige a la url empresa/login
  //que hace referencia al componente login-empresa
  //la referencia esta declarada en el archivo app-routing.module
  loginEmpresa(){
  	this.router.navigate(["empresa/login"]);
  }

  perfilEmpresa(){
    this.router.navigate(["empresa/perfil"]);
  }

  empresaListaReclamos(){
    this.router.navigate(["empresa/listaReclamos"]);
  }

  empresaListaSugerencias(){
    this.router.navigate(["empresa/listaSugerencias"]);
  }

  empresaResponderReclamo(){
    this.router.navigate(["empresa/responderReclamo"]);
  }

  empresaResponderSugerencia(){
    this.router.navigate(["empresa/responderSugerencia"]);
  }
  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  home(){
    this.router.navigate(['home']);
  }
  

}
