/*--------------------------------*/
/* SERVICIO DE USUARIO TRABAJADOR */
/*--------------------------------*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../Modelo/Empresa';
import { ReclamoSugerencia } from '../Modelo/ReclamoSugerencia';
import { Trabajador } from '../Modelo/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorServiceService {
  constructor(private http:HttpClient) { }
  url='http://35.198.4.197:8080/Trabajador';

  //obtenerReclamosSugerencias(): vacio->ReclamoSugerencia[]
  //hace la peticion al back en para que le envie todos los reclamos y digerencia 
  //la cinsulta se realiza a travez del metodo post 
  obtenerReclamosSugerencias(){
    return this.http.get<ReclamoSugerencia[]>(this.url);
  }
  //crearTrabajador():Trabajador ->vacio ->realiza una pericion post al servicor de back-end
  //envia atravex de metodo post el objeto Trabajador 
  //el cual sera agregado a la db desde el back
  crearTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.url+"/add",trabajador);
  }
  //logInTrabajador(Trabajador): trabajador -> trabajador
  // este metodo se conecta a la url 'http://35.198.4.197:8080/Trabajador'+"/login"
  // enviando un objeto de tipo Trabajador el cual contiren las credenciales del trabajador 
  //lueogo estas son comparadas en el back end, en el caso que sean correctas el metodo retornara un 
  // objeto de tipo Trabajadro con la infomracion del tabajador 
  // en el caso que el no sean correctas o no exsista el trabajador en la base de datos el metodo retorna null 
  logInTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.url+"/login",trabajador);
  }
  //listaTrabajadores(number):number-> Trabajador[]
  // este metodo se conecta a la url 'http://35.198.4.197:8080/Trabajador'+"/"+idEmrpesa
  // y deuelve la lista de trabajadores correspondientes a la empresa a la que
  // corresponda el id ingresado como parametro 
  listaTrabajadores(idEmrpesa:number){
    return this.http.get<Trabajador[]>(this.url+"/"+idEmrpesa);
  }
  //eliminarTrabajador(number):number->vavcio
  //este metodo se conecta a la url 'http://35.198.4.197:8080/Trabajador'+"/delete/"+id
  //sindo el id un id valido de un trabajador  registrado el cual en el back end sera
  //eliminado de la base de datos este metodo devuelve void 
  eliminarTrabajador(id:number){
   return this.http.get<void>(this.url+"/delete/"+id) ;
  }
  //agregarTrabaajdor(Trabajador):Trabajador-> Trabajador
  //este metodo se conecta a la url 'http://35.198.4.197:8080/Trabajador'+"/add"
  // y envia a travez del metodo post un objeto de tipo Trabajador el cual sera 
  //ingresado a la base de datos 
  agregarTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.url+"/add",trabajador);
  }

}
