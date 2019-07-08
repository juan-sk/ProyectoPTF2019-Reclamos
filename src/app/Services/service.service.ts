import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsuarioRegistrado} from '../Modelo/UsuarioRegistrado';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/Usuario'

  getPersona(){
    return this.http.get<UsuarioRegistrado[]>(this.url);
  }
  createPersona(usuarioregistrado:UsuarioRegistrado){
    return this.http.post<UsuarioRegistrado>(this.url,usuarioregistrado);
  }
  getPersonaId(id:number){
    return this.http.get<UsuarioRegistrado>(this.url+"/"+id);
  }
  updatePersona(usuarioregistrado:UsuarioRegistrado){
    return this.http.put<UsuarioRegistrado>(this.url+"/"+usuarioregistrado.id_rutUsuario,usuarioregistrado);
  }
  logIn(credenciales:UsuarioRegistrado){
    return this.http.put<UsuarioRegistrado>(this.url+'/'+credenciales.id_rutUsuario ,credenciales);
  }
  
}
