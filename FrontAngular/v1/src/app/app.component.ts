import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit() {
   
  }
  home(){
    this.router.navigate(['home']);
  }
  login(){
    this.router.navigate(['login']);
  }
  registrar(){
    this.router.navigate(['registrar']);
  }

  nuestroEquipo(){
    this.router.navigate(['nuestro_equipo']);
  }

  title = 'v1';
}
