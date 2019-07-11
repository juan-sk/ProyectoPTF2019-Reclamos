import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamo-enviado',
  templateUrl: './reclamo-enviado.component.html',
  styleUrls: ['./reclamo-enviado.component.css']
})
export class ReclamoEnviadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
