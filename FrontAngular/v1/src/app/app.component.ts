/*---------------*/
/* APP COMPONENT */
/*---------------*/
// Componente principal de la app, contiene el header y footer.

import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){}
  title = 'v1';
  //este metodo se ejecuta al momento de iniciar el componente
  ngOnInit() {
   
  }

  //home(): vacio->vacio
  //este metodo redirecciona al componente home
  home(){
    this.router.navigate(['home']);
  }
  //logIn(): vacio->vacio 
  // este metodo redirecciona al componente login
  login(){
    this.router.navigate(['login']);
  }
  //regustrar():vacio->vacio
  //este metodo redirecciona al componente registrar
  registrar(){
    this.router.navigate(['registrar']);
  }
  //nuestroEquipo():vacio->vacio 
  // este metodo redirecciona al componente nuestro_equipo
  nuestroEquipo(){
    this.router.navigate(['nuestro_equipo']);
  }


}
