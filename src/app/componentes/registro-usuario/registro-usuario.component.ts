import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  nombre_usuario:string="gola";
  usuarioARegistrar:UsuarioRegistrado;
  pass2:string;
  correo2:string;
  mensaje:string="";
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.usuarioARegistrar.correo_usuario="nada@cosa.com"
  }
  registro(){

    if((this.validarCorreo(this.correo2,this.usuarioARegistrar.correo_usuario))&&(this.validarPass(this.pass2,this.usuarioARegistrar.pass_usuario))){
      this.service.createPersona(this.usuarioARegistrar).subscribe(data=>{
        alert("se agrego");
        //this.router.navigate(["listar"]); 
      })
    }else{
      this.mensaje="las constraseña o el correo no coinciden ";
    }

  }
  validarCorreo(correo_usuario:string,correo2:string):boolean{
    return (correo2==correo_usuario);
  }
  validarPass(p1:string,p2:string):boolean{
    return (p1==p2);
  }
}
