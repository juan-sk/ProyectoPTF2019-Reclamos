import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { Empresa } from 'src/app/Modelo/Empresa';

@Component({
  selector: 'app-agregar-trabajadores',
  templateUrl: './agregar-trabajadores.component.html',
  styleUrls: ['./agregar-trabajadores.component.css']
})
export class AgregarTrabajadoresComponent implements OnInit {

  constructor(private router:Router,private serviciotrabajador:TrabajadorServiceService) { }
  trabajador:Trabajador=new Trabajador();
  infoTrabajador:Trabajador = JSON.parse(localStorage.getItem("trabajador"));
  infoEmrpesa:Empresa=JSON.parse(localStorage.getItem("empresa"));
  administrador:boolean=false;
  ngOnInit() {
    
    if(!(this.infoTrabajador!=null)){
      this.router.navigate(["home"]);
    }
    if(this.infoTrabajador.tipoTrabajador=="Administrador"){
      this.administrador=true;
    }
    this.trabajador.empresa=this.infoEmrpesa.nombreEmpresa;
  }
  agregarTrabajador(){
    this.serviciotrabajador.agregarTrabajador(this.trabajador).subscribe();
    this.router.navigate(["empresa/listarTrabajadores"]);
  }
}
