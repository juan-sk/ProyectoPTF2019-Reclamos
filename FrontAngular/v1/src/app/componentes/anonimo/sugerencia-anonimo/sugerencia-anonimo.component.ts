import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Empresa } from 'src/app/Modelo/Empresa';

@Component({
  selector: 'app-sugerencia-anonimo',
  templateUrl: './sugerencia-anonimo.component.html',
  styleUrls: ['./sugerencia-anonimo.component.css']
})
export class SugerenciaAnonimoComponent implements OnInit {
  rs:ReclamoSugerencia=new ReclamoSugerencia();
  idBusqueda:number;
  empresas:string[]=["aguas andinas","enel","gasco","vtr"];
  empresa:string;
  cantidadMaxima:number=265;
  cantidadCarcteres:number=0;

  constructor(private router:Router, private serviceRS:RsServiceService,private servicioEmpresa:EmpresaServiceService) { }
  
  ngOnInit() {
    this.rs.idReclamoSugerencia=0;
    this.rs.detalleReclamoSugerencia=" ";
    this.servicioEmpresa.listaEmpresas().subscribe(data=>{
      this.empresas=data;
    
    });
  } 
  //Método para realizar Reclamo o Sugerencia
  realizarReclamoSugerencia() {
    
    try {
      this.servicioEmpresa.idEmpresa(this.empresa).subscribe(data=>{
        let emp:Empresa=data;
        
        this.rs.idEmpresa=emp.rutEmpresa;
        console.log(this.rs.idEmpresa);
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
        this.serviceRS.crearReclamo(this.rs).subscribe(data =>{this.rs= data});
        try {
          this.serviceRS.getLastReclamoUsuario(this.rs.usuarioReclamoSugerencia).subscribe(data=>{
            let rs:ReclamoSugerencia=data;
            
            localStorage.setItem("idRS",""+rs.idReclamoSugerencia);
            console.log(localStorage.getItem("idRS"));
            //alert("reclamo generado enviado con exito ");
            this.router.navigate(["anonimo/reclamo_sugerencia_anonimo_enviado"]);
          });
        } catch (error) {
          this.serviceRS.getLastReclamo().subscribe(data=>{
            let rs:ReclamoSugerencia=data;
            
            localStorage.setItem("idRS",""+rs.idReclamoSugerencia);
            console.log(localStorage.getItem("idRS"));
            //alert("reclamo generado enviado con exito ");
            this.router.navigate(["anonimo/reclamo_sugerencia_anonimo_enviado"]);
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
  //Busca reclamo o sugerencia por ID y abre página con información
  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
  //Lleva a pestaña home de empresa
  homeEmpresa(){
    this.router.navigate(["home_empresa"]);
  }
  //lleva a pestaña Realizar SUgerencia
  realizarSugerencia(){
    this.router.navigate(["realizar_sugerencia"]);
  }
  //Lleva a pestaña Realizar un reclamo
  realizarReclamo(){
    this.router.navigate(["realizar_reclamo"]);
  }
  //Lleva apestaña 
  login(){
    this.router.navigate(["login"]);
  }
  //Lleva a pagina Registrar usuario 
  registrar(){
    this.router.navigate(["registrar"]);
  }
}
