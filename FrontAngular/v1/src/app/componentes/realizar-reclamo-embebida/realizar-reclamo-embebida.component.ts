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
  tipo:string="";
  empresa:string;
  sesion:boolean=false;
  idEmpresa;
  constructor(private router:Router,private serviceRS:RsServiceService,private pathVariavles:ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('Email')!="anonimo"){
      this.sesion=true;
      this.rs.usuarioReclamoSugerencia=+localStorage.getItem("idUsuario");
    }
    this.pathVariavles.params.subscribe(params=> this.idEmpresa=params['id']);
  console.log("id_ "+this.idEmpresa);
  }
  realizarReclamoSugerencia() {
    this.rs.idEmpresa=this.idEmpresa;
    this.rs.idReclamoSugerencia=0;
    this.rs.idEmpleado=0;
    this.rs.estado="en proseso";
    this.rs.tipo=this.tipo
    this.rs.respuestaRS="aun no tiene respuestas";
    
    this.rs.fechaReclamoSugerencia=new Date();

    localStorage.setItem("tituloRS",this.rs.tituloRS);
    localStorage.setItem("empresa",""+this.rs.idEmpresa);
    localStorage.setItem("idRS",""+this.rs.idReclamoSugerencia);
    localStorage.setItem("fecha",this.rs.fechaReclamoSugerencia.toString())
    localStorage.setItem("detalleRS",this.rs.detalleReclamoSugerencia);
    localStorage.setItem("tipo",this.rs.tipo);
    this.serviceRS.crearReclamo(this.rs).subscribe(data =>{this.rs= data});
    alert("reclamo generado enviado con exito ");
    this.router.navigate(["perfil"]);
  }
  login(){
    this.router.navigate(['login']);
  }
}
