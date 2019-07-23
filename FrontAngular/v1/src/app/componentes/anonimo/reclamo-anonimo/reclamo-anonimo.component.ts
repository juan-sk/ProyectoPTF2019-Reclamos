import { Component, OnInit } from '@angular/core';
import { ReclamoSugerencia } from 'src/app/Modelo/ReclamoSugerencia';
import { Router } from '@angular/router';
import { RsServiceService } from 'src/app/Services/rs-service.service';
import { EmpresaServiceService } from 'src/app/Services/empresa-service.service';
import { Empresa } from 'src/app/Modelo/Empresa';

@Component({
  selector: 'app-reclamo-anonimo',
  templateUrl: './reclamo-anonimo.component.html',
  styleUrls: ['./reclamo-anonimo.component.css']
})
export class ReclamoAnonimoComponent implements OnInit {

	rs:ReclamoSugerencia=new ReclamoSugerencia();
  idBusqueda:number;
  empresas:string[]=[];
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
   
  realizarReclamoSugerencia() {
    try {
      this.servicioEmpresa.idEmpresa(this.empresa).subscribe(data=>{
        let emp:Empresa=data;
        
        this.rs.idEmpresa=emp.rutEmpresa;
        console.log(this.rs.idEmpresa);
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
        }
       
      })
      
    } catch (error) {
    console.log("error");
    }
  }

  buscarPorId(){
    localStorage.setItem("idBusqueda",""+this.idBusqueda);
    this.router.navigate(['buscar_id']);
    
  }
 
  realizarSugerencia(){
    this.router.navigate(["realizar_sugerencia"]);
  }
  realizarReclamo(){
    this.router.navigate(["realizar_reclamo"]);
  }
  homeEmpresa(){
    this.router.navigate(['home_empresa']);
  }
  registrar(){
    this.router.navigate(['registrar']);
  }
  //login():vacio-> vacio
  //redirige al componente login
  login(){
    this.router.navigate(['login']);
  }

}
