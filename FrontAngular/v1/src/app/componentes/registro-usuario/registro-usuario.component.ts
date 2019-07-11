import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { ServiceService } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';

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
    idbusqueda:number;
  constructor(private router:Router,private service:ServiceService,  private serviceRS:RsServiceService) { }

  ngOnInit() {
  
  }
  //noNulo(): vacio ->boolean
  //devuelbe true en el caso que ninguna de las variables no tenga el estado null
  //ejemplo: noNulo() con this.correo = null devuelve -> false
  //ejemplo: noNulo() con todas las variables con valores devuelve ->true
  noNulo():boolean{
    let noNulo:boolean=(this.correo2==null||this.usuarioARegistrar.emailUsuario==null||this.correo2==null||this.usuarioARegistrar.emailUsuario==null);
    return noNulo;
  }

  registro(){
    this.infoUsuario();
    if (this.noNulo()){
      this.mensaje="los campos de contraseña y correo electronico no pueden estar vacios"
    }else if((this.validarCorreo(this.correo2,this.usuarioARegistrar.emailUsuario))&&(this.validarPass(this.pass2,this.usuarioARegistrar.passUsuario))){
      this.mensaje="";
      this.service.crearUsuarioPrueba(this.usuarioARegistrar).subscribe(data=>{
        alert("se agrego correctamente");
      })
      this.router.navigate(["perfil"]); 
      localStorage.setItem("id", ""+this.usuarioARegistrar.rutUsuario);
    }else{
      this.mensaje="Error en: constraseña o correo, no coinciden ";
    }

  }
  validarCorreo(correo_usuario:string,correo2:string):boolean{
    return (correo2==correo_usuario);
  }
  validarPass(p1:string,p2:string):boolean{
    return (p1==p2);
  }
  //infoUsuario(): vacio ->vacio
  //muestra por la consola del navegador la informacion de registro 
  //esta funcion es de testeo, para comprobar la informacion del formulario 
  //ejemplo: indoUsuario() devuelve -> rut: 12345678 nombre: juan apellido: ramirez correo: juan.ramirez.sk@gmail.com genero: masculino pass: contraseña fecha n: 2019-07-03 telefono: 123456789
  infoUsuario(){
    
    console.log("rut: "+this.usuarioARegistrar.rutUsuario.toString()+" nombre: "+this.usuarioARegistrar.nombreUsuario+
    " apellido: "+this.usuarioARegistrar.apellidoUsuario+" correo: "+this.usuarioARegistrar.emailUsuario+" genero: "
    +this.usuarioARegistrar.generoUsuario+" pass: "+this.usuarioARegistrar.passUsuario+" fecha n: "+
    this.usuarioARegistrar.fechaNacUsuario+" telefono: "+this.usuarioARegistrar.fonoUsuario+"pass2: "+this.pass2+" correo2: "+ this.correo2);
    
  }

  buscarPorId(){
    this.serviceRS.getReclamo(this.idbusqueda);
  }

}
