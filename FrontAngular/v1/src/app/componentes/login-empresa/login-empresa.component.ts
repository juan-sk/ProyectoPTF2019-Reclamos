import { Component, OnInit } from '@angular/core';
import { UsuarioRegistrado } from 'src/app/Modelo/UsuarioRegistrado';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { TrabajadorServiceService } from 'src/app/Services/trabajador-service.service';
import { Trabajador } from 'src/app/Modelo/trabajador';
import { Empresa } from 'src/app/Modelo/Empresa';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css']
})
export class LoginEmpresaComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService,
     private serviceRS:RsServiceService,private trabajadorService:TrabajadorServiceService,
     private servicioEmpresa:EmpresaServiceService) { }

  trabajador:Trabajador=new Trabajador(); 
  mensajeError:string;
  idBusqueda:number;
  
  ngOnInit() {
    
    this.trabajador.idTrabajador=0;
    this.trabajador.apellidoTrabajador=" ";
    this.trabajador.tipoTrabajador=" ";
  }
  //homeEmpresa():vacio->vacio
  //redirige al compoenente Home_empresa
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  //registrar():vacio->vacio
  //redirige a la url empresa/registro
  //que hace referencia al componente registro-empresa 
  registrarEmpresa(){
    this.router.navigate(["empresa/registro"]);
  } 

  logInEmpresa(){
    try {
      console.log(this.trabajador);
      this.trabajadorService.logInTrabajador(this.trabajador).subscribe(data=>{
        let credencialesTrabajador= data;
        console.log("tipo de trabajador: "+credencialesTrabajador.tipoTrabajador);
        if(credencialesTrabajador==null){
          this.mensajeError="el correo o la contraseña no coinciden ";  
        }else{
          localStorage.setItem("trabajador",JSON.stringify(credencialesTrabajador));
          let credencialesEmpresa:Empresa=new Empresa();
          this.servicioEmpresa.idEmpresa(credencialesTrabajador.empresa).subscribe(data=>{
            credencialesEmpresa=data;
            credencialesEmpresa.nombreEmpresa=credencialesTrabajador.empresa;
            localStorage.setItem("empresa",JSON.stringify(credencialesEmpresa));
            localStorage.setItem("id empresa",""+credencialesEmpresa.rutEmpresa);
          })
          this.router.navigate(["empresa/perfil"]);
          this.mensajeError="";
        }
      })  
    } catch (error) {
      this.mensajeError="verifica que los campos sean correctos";
    }finally{
      this.mensajeError="verifica que los campos sean correctos";
    }
    
  }
  //buscarPorId(): vacio -> vacio
  //guarda el id de busqueda idbusqueda y 
  //redirige al componente buscar_id
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  home(){
    this.router.navigate(['home']);
  }


  
}
