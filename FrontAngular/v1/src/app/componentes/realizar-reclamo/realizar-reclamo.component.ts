import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia} from 'src/app/Modelo/ReclamoSugerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-realizar-reclamo',
  templateUrl: './realizar-reclamo.component.html',
  styleUrls: ['./realizar-reclamo.component.css']
})
export class RealizarReclamoComponent implements OnInit {

	rs:ReclamoSugerencia=new ReclamoSugerencia();
    idbusqueda:number;
  empresas:string[]=["aguas andinas","enel","gasco","vtr"];
  empresa:string;

  constructor(private router:Router, private serviceRS:RsServiceService) { }

  ngOnInit() {
    this.rs.idReclamoSugerencia=0;
  }
  
  realizarReclamoSugerencia() {
    this.rs.idEmpresa=1;
    this.rs.idReclamoSugerencia=0;
    this.rs.idEmpleado=0;
    this.rs.estado="en proseso";
    this.rs.usuarioReclamoSugerencia=0;
    
    this.rs.fechaReclamoSugerencia=new Date();

    this.serviceRS.crearReclamo(this.rs).subscribe(data =>{this.rs= data});
    //alert("reclamo generado enviado con exito ");
    this.router.navigate(["rs_enviado"]);
  }

  buscarPorId(){
    this.serviceRS.getReclamo(this.idbusqueda);
  }

}