import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsuarioRegistrado} from '../Modelo/UsuarioRegistrado';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/Usuario'

  getUsuarios(){
    return this.http.get<UsuarioRegistrado[]>(this.url);
  }
  crearUsuario(usuarioregistrado:UsuarioRegistrado){
    return this.http.post<UsuarioRegistrado>(this.url,usuarioregistrado);
  }
  crearUsuarioPrueba(usuarioregistrado:UsuarioRegistrado){
    return this.http.post<UsuarioRegistrado>(this.url,usuarioregistrado);
  }
  getUsuarioId(id:number){
    return this.http.get<UsuarioRegistrado>(this.url+"/"+id);
  }
  updateUsuario(usuarioregistrado:UsuarioRegistrado){
    return this.http.put<UsuarioRegistrado>(this.url+"/"+usuarioregistrado.nombreusuario,usuarioregistrado);
  }
  logIn(credenciales:UsuarioRegistrado){
    return this.http.post<UsuarioRegistrado>(this.url+'/login',credenciales);
  }
  

}
