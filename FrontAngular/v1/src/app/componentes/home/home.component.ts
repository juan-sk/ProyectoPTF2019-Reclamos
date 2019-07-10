import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  nombre:string = localStorage.getItem('Email');

  ngOnInit() {
    if(this.nombre!="anonimo"){
      this.router.navigate(["perfil"]);
    }
  }
  registrar(){
    this.router.navigate(['registrar']);
  }
  login(){
    this.router.navigate(['login']);
  }
}
