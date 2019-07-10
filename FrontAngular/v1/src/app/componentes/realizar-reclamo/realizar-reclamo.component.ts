import { Component, OnInit } from '@angular/core';
import { ReclamoSujerencia} from 'src/app/Modelo/ReclamoSujerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizar-reclamo',
  templateUrl: './realizar-reclamo.component.html',
  styleUrls: ['./realizar-reclamo.component.css']
})
export class RealizarReclamoComponent implements OnInit {

	rs:ReclamoSujerencia=new ReclamoSujerencia();

  constructor(private router:Router) { }

  ngOnInit() {
  }

}