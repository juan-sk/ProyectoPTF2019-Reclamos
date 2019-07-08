import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuarioARegistrar:UsuarioRegistrado= new UsuarioRegistrado();
  pass2:string;
  correo2:string;
  mensaje:string="";
  constructor(private service:ServiceService) { }

  ngOnInit() {
  
  }
  registro(){
    let noNulo:boolean=(this.correo2==null||this.usuarioARegistrar.correo_usuario==null||this.correo2==null||this.usuarioARegistrar.correo_usuario==null);
    if (noNulo){
      this.mensaje="los campos de contraseña y correo electronico no pueden estar vacios"
    }else if((this.validarCorreo(this.correo2,this.usuarioARegistrar.correo_usuario))&&(this.validarPass(this.pass2,this.usuarioARegistrar.pass_usuario))){
      this.mensaje="";
      this.service.createPersona(this.usuarioARegistrar).subscribe(data=>{
        alert("se agrego");
        //this.router.navigate(["listar"]); 
      })
    }else{
      this.mensaje="Error en: constraseña o correo no coinciden ";
    }
    console.log("termino el registro ");

  }
  validarCorreo(correo_usuario:string,correo2:string):boolean{
    return (correo2==correo_usuario);
  }
  validarPass(p1:string,p2:string):boolean{
    return (p1==p2);
  }
}
