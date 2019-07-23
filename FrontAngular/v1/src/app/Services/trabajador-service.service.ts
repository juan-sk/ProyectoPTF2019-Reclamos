import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../Modelo/Empresa';
import { ReclamoSugerencia } from '../Modelo/ReclamoSugerencia';
import { Trabajador } from '../Modelo/trabajador';
import { NumberValueAccessor } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TrabajadorServiceService {
  constructor(private http:HttpClient) { }
  url='http://localhost:8080/Trabajador';

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
  logInTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.url+"/login",trabajador);
  }
  listaTrabajadores(idEmrpesa:number){
    return this.http.get<Trabajador[]>(this.url+"/"+idEmrpesa);
  }
  eliminarTrabajador(id:number){
   return this.http.get<void>(this.url+"/delete/"+id) ;
  }
  agregarTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.url+"/add",trabajador);
  }

}
