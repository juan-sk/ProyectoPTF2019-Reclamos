import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import {RsServiceService} from 'src/app/Services/rs-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-realizar-reclamo-embebida',
  templateUrl: './realizar-reclamo-embebida.component.html',
  styleUrls: ['./realizar-reclamo-embebida.component.css']
})
export class RealizarReclamoEmbebidaComponent implements OnInit {
  rs:ReclamoSugerencia=new ReclamoSugerencia();
  empresas:string[]=["aguas andinas","enel","gasco","vtr"];
  tipos:string[]=["Reclamo","Sugerencia"];
  tipo:string="hola";
  empresa:string;
  sesion:boolean=false;
  idEmpresa;
  constructor(private router:Router,private serviceRS:RsServiceService,private pathVariavles:ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('Email')!='anomino'){
      this.sesion=true;
    }
    this.pathVariavles.params.subscribe(params=> this.idEmpresa=params['id']);
  console.log("id_ "+this.idEmpresa);
  }
  realizarReclamoSugerencia() {
    this.rs.idEmpresa=this.idEmpresa;
    this.rs.idReclamoSugerencia=0;
    this.rs.idEmpleado=0;
    this.rs.estado="en proseso";
    this.rs.usuarioReclamoSugerencia=0;
    
    this.rs.fechaReclamoSugerencia=new Date();

    this.serviceRS.crearReclamo(this.rs).subscribe(data =>{this.rs= data});
    alert("reclamo generado enviado con exito ");
    this.router.navigate(["perfil"]);
  }
  login(){
    this.router.navigate(['login']);
  }
}
