/*------------------*/
/* SERVICIO EMPRESA */
/*------------------*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../Modelo/Empresa';
import { Trabajador } from '../Modelo/trabajador';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {
  constructor(private http:HttpClient) { }
  url='http://35.198.4.197:8080/Empresa';

  //crearEmpresa:Empresa->vacio->realiza una pericion post al servicor de back-end
  //envia atravez del metodo post el objeto empresa 
  //el cual  sera agregado a la db desde el back
  crearEmpresa(empresa:Empresa){
  	return this.http.post<Empresa>(this.url,empresa);
  }
  //listaEmpresas():vacio->string[]
  //se conecta a la url 'http://35.198.4.197:8080/Empresa'+"/nombre"
  // desde la cual obtiene la lista de empresas almacenadas
  listaEmpresas(){
    return this.http.get<string[]>(this.url+"/nombre");
  }
  //nombreEmpresa(number):number->Empresa
  //utilizando el numero de id de empresa pasado como parametro 
  //se conecta a la url 'http://35.198.4.197:8080/Empresa'+"/nombre/"+id 
  //desde la que retorna el objeto empresa correspondiente 
  //al id entregado como pathvariable
  nombreEmpresa(id:number){
    return this.http.get<Empresa>(this.url+"/nombre/"+id);
  
  }
  //idEmpresa(string):string->empresa
  //utilizando el nombre de la empresa pasado como parametro 
  //se conecta a la url 'http://35.198.4.197:8080/Empresa'+"/nombre/id/"+nombre
  //desde la que retorna un objeto Empresa correspondiente a la empresa con el nombre 
  idEmpresa(nombre:string){
    return this.http.get<Empresa>(this.url+"/nombre/id/"+nombre);
  }

}
