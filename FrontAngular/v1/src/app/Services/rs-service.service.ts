/*----------------------------------*/
/* SERVICIO DE RECLAMO / SUGERENCIA */
/*----------------------------------*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReclamoSugerencia } from '../Modelo/ReclamoSugerencia';

@Injectable({
  providedIn: 'root'
})
export class RsServiceService {
 
  constructor(private http:HttpClient) { }
  url='http://35.198.4.197:8080/ReclamoSugerencia'

  //crearreclamo(): ReclamoSugerencia-> <ReclamoSugerencia>
  //realiza una peticion html por medio del metodo post para enviar el objeto ReclamoSugerencia
  //al servidor de Back-end, el cual lo agrega a la db de ReclamoSugerencia
  crearReclamo(rs:ReclamoSugerencia){
  	return this.http.post<ReclamoSugerencia>(this.url,rs);
  }
  //getreclamo(): number-> <ReclamoSugerencia>
  //realiza una peticion html por medio del metodo post para enviar un id de reclamo o sugerencia
  //al servidor de Back-end, lo busca en la base de datos y debuelve el objeto ReclamoSugerencia
  getReclamo(id:number){
    return this.http.get<ReclamoSugerencia>(this.url + "/" + id);
  }
  //getLastReclamoUsuario(number):number->ReclamoSugerencia
  //este metodo se conecta a la url 'http://35.198.4.197:8080/ReclamoSugerencia'+"/id/"+idUsuario
  //desde el back end se busca el ultimo reclamo o sugerencia del usuario el cual es retonado 
  getLastReclamoUsuario(idUsuario:number){
    return this.http.get<ReclamoSugerencia>(this.url+"/id/"+idUsuario);
  }
  //getLastReclamo():vacio->ReclamoSugerencia
  //se conecta a la url 'http://35.198.4.197:8080/ReclamoSugerencia'+"/id/last"
  //desde el back end se busca el ulrimo reclamo o sugerencia hecho en la
  //plaraforma el cual es retormado
  getLastReclamo(){
    return this.http.get<ReclamoSugerencia>(this.url+"/id/last");
  }
  //getRSEmpresa(number):number->reclamoSugerencia[]
  //el metodo se conecta a la url 'http://35.198.4.197:8080/ReclamoSugerencia'+"/listar/rs/"+id
  //la cual retorna un areglo de ReclamoSugerencia[] con los reclamos y sugerencias 
  //correspondeienetes al id de la empresa pasado como parametro 
  getRSEmpresa(id:number){
    return this.http.get<ReclamoSugerencia[]>(this.url+"/listar/rs/"+id);
  }
  //getReclamoEmpresa(number):number->reclamoSugerencia[]
  //el metodo se conecta a la url 'http://35.198.4.197:8080/ReclamoSugerencia'+"/listar/rs/"+id
  //la cual retorna un areglo de ReclamoSugerencia[] con los reclamos
  //correspondeienetes al id de la empresa pasado como parametro 
  getReclamoEmpresa(id:number){
    return this.http.get<ReclamoSugerencia[]>(this.url+"/listar/r/"+id)
  }
  //getSugerenciaEmpresa(number):number->reclamoSugerencia[]
  //el metodo se conecta a la url 'http://35.198.4.197:8080/ReclamoSugerencia'+"/listar/rs/"+id
  //la cual retorna un areglo de ReclamoSugerencia[] con los Sugerencias
  //correspondeienetes al id de la empresa pasado como parametro 
  getSugerenciaEmpresa(id:number){
    return this.http.get<ReclamoSugerencia[]>(this.url+"/listar/s/"+id);
  }
  //setTrabajador(number, ReclamoSugerencia): number ReclamoSugerencia -> ReclamoSugerencia
  //el metodo se conecta a la url 'http://35.198.4.197:8080/ReclamoSugerencia'+"/setTrabajador/"+id
  //y de envia el objeto rs a travez del metodo post 
  setTrabajador(id:number,rs:ReclamoSugerencia){
    return this.http.post<ReclamoSugerencia>(this.url+"/setTrabajador/"+id,rs);
  }
  getRSUsuario(id:number){
    return this.http.get<ReclamoSugerencia[]>(this.url+"/listar/"+id);
  }
  //getEstadistica(number): number -> number[]
  //este metodo se conecta a la url 'http://35.198.4.197:8080/ReclamoSugerencia'+"/Estadistica/"+id
  //el cual restorna un areglo de numeros el cual conriene dos valores la cnatidad de  
  getEstadistica(id:number){
    return this.http.get<number[]>(this.url+"/Estadistica/"+id);
  }

  responderRS(rs:ReclamoSugerencia){
    return this.http.post<ReclamoSugerencia>(this.url+"/responder",rs);
  }
}