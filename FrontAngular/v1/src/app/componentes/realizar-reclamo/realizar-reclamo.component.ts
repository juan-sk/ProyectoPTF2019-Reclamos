import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia} from 'src/app/Modelo/ReclamoSugerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Router } from '@angular/router';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/Modelo/Empresa';
import { EnviarEmailService } from 'src/app/Services/enviar-email.service';


@Component({
  selector: 'app-realizar-reclamo',
  templateUrl: './realizar-reclamo.component.html',
  styleUrls: ['./realizar-reclamo.component.css']
})

export class RealizarReclamoComponent implements OnInit {
	rs:ReclamoSugerencia=new ReclamoSugerencia();
  idBusqueda:number;
  empresas:Array<string>=[];
  empresa:string;
  cantidadMaxima:number=265;
  cantidadCarcteres:number=0;
  nombre:string = localStorage.getItem('Email');
  nombreUsuario:string;
  apellidoUsuario:string;

  constructor(private router:Router, private serviceRS:RsServiceService,private servicioEmpresa:EmpresaServiceService, private servicioMail:EnviarEmailService) { }
  
  ngOnInit() {
    this.rs.idReclamoSugerencia=0;
    this.rs.detalleReclamoSugerencia=" ";
    let credencial=localStorage.getItem("Email")
    if(credencial=="anonimo"|| credencial==null){
      this.router.navigate(["home"]);
    }
    this.nombreUsuario=localStorage.getItem("nombre");
    this.apellidoUsuario=localStorage.getItem("apellido");
    this.rs.usuarioReclamoSugerencia=+localStorage.getItem("idUsuario");
    this.servicioEmpresa.listaEmpresas().subscribe(data=>{
    this.empresas=data;
    this.nombreUsuario=localStorage.getItem("nombre");
    this.apellidoUsuario=localStorage.getItem("apellido");
  });

  }
  //Toma datos de Sugerencia y las guarda en DB
  realizarReclamoSugerencia() {
    try {
      this.servicioEmpresa.idEmpresa(this.empresa).subscribe(data=>{
        let emp:Empresa=data;
        this.rs.idEmpresa=emp.rutEmpresa;
        this.rs.tipo="Reclamo";
        this.rs.idReclamoSugerencia=0;
        this.rs.idEmpleado=0;
        this.rs.estado="en proceso";
        this.rs.respuestaRS="aun no tiene respuesta";
        this.rs.fechaReclamoSugerencia=new Date();
        localStorage.setItem("tituloRS",this.rs.tituloRS);
        localStorage.setItem("empresa",this.rs.idEmpresa+"");
        localStorage.setItem("idRS",""+this.rs.idReclamoSugerencia);
        localStorage.setItem("fecha",this.rs.fechaReclamoSugerencia.toString());
        localStorage.setItem("detalleRS",this.rs.detalleReclamoSugerencia);
        localStorage.setItem("tipo",this.rs.tipo);
        this.rs.fechaResuelto=new Date("2019-01-01");
        this.serviceRS.crearReclamo(this.rs).subscribe(data =>{this.rs= data});
  
        try {
          this.serviceRS.getLastReclamoUsuario(this.rs.usuarioReclamoSugerencia).subscribe(data=>{
            let rs:ReclamoSugerencia=data;
            localStorage.setItem("idRS",""+rs.idReclamoSugerencia);
            //alert("reclamo generado enviado con exito ");
            //this.enviarEmail();
            this.servicioMail.sendEmail(+localStorage.getItem("idUsuario"));
            this.router.navigate(["rs_enviado"]);
          });
        } catch (error) {
          this.serviceRS.getLastReclamo().subscribe(data=>{
            let rs:ReclamoSugerencia=data;
            
            localStorage.setItem("idRS",""+rs.idReclamoSugerencia);
            console.log(localStorage.getItem("idRS"));
            //alert("reclamo generado enviado con exito ");
            this.router.navigate(["rs_enviado"]);
          });
        }finally{
          this.serviceRS.getLastReclamo().subscribe(data=>{
            let rs:ReclamoSugerencia=data;
            
            localStorage.setItem("idRS",""+rs.idReclamoSugerencia);
            console.log(localStorage.getItem("idRS"));
            //alert("reclamo generado enviado con exito ");
            this.router.navigate(["rs_enviado"]);
          });
        }
       
      })
      
    } catch (error) {
    console.log("error");
    }
    
  }
  //Abre pestaña Buscar ID
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  //Cierra sesión y reenvía a pestaña Home
  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }
  //Abre pestaña Realizar Sugerencia
  realizarSugerencia(){
    this.router.navigate(["realizar_sugerencia"]);
  }
  //Abre pestaña Realizar Reclamo
  realizarReclamo(){
    this.router.navigate(["realizar_reclamo"]);
  }
  //Redirige a pestaña Mi Perfil
  miPerfil() {
    this.router.navigate(['miPerfil']);
  }
  //Redirige a pestaña Home
  iraPerfil() {
    this.router.navigate(['home']);
  }
  //Permite el envío de un objeto a mail tomando id de usuario (mail de usuario)
  enviarEmail(){
    this.servicioMail.sendEmail(+localStorage.getItem("idUsuario"));
  }
  
}