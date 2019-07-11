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

  constructor(private router:Router, private serviceRS:RsServiceService) { }

  ngOnInit() {
  }

  realizarReclamoSugerencia() {
  	alert("hola");
    this.serviceRS.crearReclamo(this.rs);
  }

  buscarPorId(){
    this.serviceRS.getReclamo(this.idbusqueda);
  }

}