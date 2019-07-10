import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  realizarReclamo() {
  	this.router.navigate(['realizar_reclamo']);
  }

   nombre:string = localStorage.getItem('Email');
}
