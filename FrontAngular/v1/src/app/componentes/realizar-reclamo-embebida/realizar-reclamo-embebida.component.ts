import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import {RsServiceService} from 'src/app/Services/rs-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EnviarEmailService } from 'src/app/Services/enviar-email.service';

@Component({
  selector: 'app-realizar-reclamo-embebida',
  templateUrl: './realizar-reclamo-embebida.component.html',
  styleUrls: ['./realizar-reclamo-embebida.component.css']
})
export class RealizarReclamoEmbebidaComponent implements OnInit {
  //atributos
  rs:ReclamoSugerencia=new ReclamoSugerencia();
  empresas:string[]=["aguas andinas","enel","gasco","vtr"];
  tipos:string[]=["Reclamo","Sugerencia"];
  tipo:string="";
  empresa:string;
  sesion:boolean=false;
  idEmpresa;

  constructor(private servicioMail:EnviarEmailService,private router:Router,private serviceRS:RsServiceService,private pathVariavles:ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('Email')!="anonimo"){
      this.sesion=true;
      this.rs.usuarioReclamoSugerencia=+localStorage.getItem("idUsuario");
    }
    this.pathVariavles.params.subscribe(params=> this.idEmpresa=params['id']);
  
  }
  //Permite la realización de sugerencia guardando datos en DB
  realizarReclamoSugerencia() {
    try {
      
      this.rs.idEmpresa=this.idEmpresa;
      
      this.rs.tipo=this.tipo;
        
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
         
          this.router.navigate(["rs_enviado"]);
        });
      }finally{
        this.serviceRS.getLastReclamo().subscribe(data=>{
          let rs:ReclamoSugerencia=data;
            
          localStorage.setItem("idRS",""+rs.idReclamoSugerencia);
         
         
          this.router.navigate(["rs_enviado"]);
      });
      }
     
    } catch (error) {
    console.log("error");
    }
  }
  //Redirige a pestaña LogIn
  login(){
    this.router.navigate(['login']);
  }
}
