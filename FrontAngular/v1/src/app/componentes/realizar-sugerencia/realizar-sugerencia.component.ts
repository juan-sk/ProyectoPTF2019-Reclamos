import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { Router } from '@angular/router';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Empresa } from 'src/app/Modelo/Empresa';
import { EnviarEmailService } from 'src/app/Services/enviar-email.service';

@Component({
  selector: 'app-realizar-sugerencia',
  templateUrl: './realizar-sugerencia.component.html',
  styleUrls: ['./realizar-sugerencia.component.css']
})
export class RealizarSugerenciaComponent implements OnInit {
  //atributos
  rs:ReclamoSugerencia=new ReclamoSugerencia();
  idBusqueda:number;
  empresas:string[]=[];
  empresa:string;
  nombre:string = localStorage.getItem('Email');
  nombreUsuario:string;
  apellidoUsuario:string;

  constructor(private router:Router, private serviceRS:RsServiceService,private servicioEmpresa:EmpresaServiceService, private servicioMail:EnviarEmailService) { }

  ngOnInit() {
    this.rs.idReclamoSugerencia=0;
    let credencial=localStorage.getItem("Email");
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

//Permite la realización de RS y guarda datos en DB
  realizarReclamoSugerencia() {
    try {
      this.servicioEmpresa.idEmpresa(this.empresa).subscribe(data=>{
        let emp:Empresa=data;
        
        this.rs.idEmpresa=emp.rutEmpresa;
        
        this.rs.tipo="Sugerencia";
        
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
           
            //alert("reclamo generado enviado con exito ");
            this.router.navigate(["rs_enviado"]);
          });
        }finally{
          this.serviceRS.getLastReclamo().subscribe(data=>{
            let rs:ReclamoSugerencia=data;
            
            localStorage.setItem("idRS",""+rs.idReclamoSugerencia);
          
            //alert("reclamo generado enviado con exito ");
            this.router.navigate(["rs_enviado"]);
          });
        }
      
      })
      
    } catch (error) {
    console.log("error");
    }
  
  }

  //Busca RS por ID y redirige a pestaña con información
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  //Cierra sesión y redirige a Home
  cerrarSesion(){
    localStorage.setItem("Email", "anonimo");
    this.router.navigate(["home"])
  }
  //Abre pestaña de realizar sugerencia
  realizarSugerencia(){
    this.router.navigate(["realizar_sugerencia"]);
  }
  //Abre la pestaña de realizar reclamo
  realizarReclamo(){
    this.router.navigate(["realizar_reclamo"]);
  }
  //Redirige a MiPerfil
  miPerfil() {
    this.router.navigate(['miPerfil']);
  }
  //Redirige a pestaña Home
  iraPerfil() {
    this.router.navigate(['home']);
  }
  //Envía email usando ID usuario de DB (email)
  enviarEmail(){
    this.servicioMail.sendEmail(+localStorage.getItem("idUsuario"));
  }
  //Redirige a Home
  home(){
    this.router.navigate(['home']);
  }
  //Redirige a pestaña Nuestro Equipo
  irNosotros(){
    this.router.navigate(["nuestro_equipo"]);
  }
}
