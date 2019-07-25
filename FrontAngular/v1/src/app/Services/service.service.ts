import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsuarioRegistrado} from '../Modelo/UsuarioRegistrado';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  url='http://35.198.4.197:8080/Usuario'
  //getUsuario(): vacio->devuelve-> UsuaroRegistrado[] 
  //devuelve todos los usuarios resitrados
  getUsuarios(){
    return this.http.get<UsuarioRegistrado[]>(this.url);
  }
  //crearUsuario(Usuarioregistrado): UsuarioRegistrado-> Usuarioregistrado
  //envia el objeto usuarioRegistrado al back-end atrabex del metodo post
  crearUsuario(usuarioregistrado:UsuarioRegistrado){
    return this.http.post<UsuarioRegistrado>(this.url,usuarioregistrado);
  }
  crearUsuarioPrueba(usuarioregistrado:UsuarioRegistrado){
    return this.http.post<UsuarioRegistrado>(this.url,usuarioregistrado);
  }
  //getUusario(number): number -> UsuarioRegistrado
  //devuelve un usuario correpsondiente al numero de ID pasado como parametro 
  getUsuarioId(id:number){
    return this.http.get<UsuarioRegistrado>(this.url+"/"+id);
  }
  updateUsuario(usuarioregistrado:UsuarioRegistrado){
    return this.http.put<UsuarioRegistrado>(this.url+"/"+usuarioregistrado.nombreUsuario,usuarioregistrado);
  }
  //logIn(Usuarioregistrado):
  //envia las credenciales del usuario encalsuladas en el objero UsuarioRegistrado
  //la respuesta en caso que exista un UsuarioRegistrado con esas credenciales sera enviada 
  //la informacion debuelta al front-en con la infomacion del usuario, a ecepcion de la contraseña que 
  // sera sustituida por valido, invalido, error, dependiendo del caso 
  // valido-> en caso que las se confirmen las credenciales 
  // invalido-> en el cado que las credenciales no coincidan, sin la informacion del usuario
  // error ->en el caso que no se encientre el usuario en la db,tambien sin la informacion del usuario 
  logIn(credenciales:UsuarioRegistrado){
    console.log("email: "+credenciales.emailUsuario+" pass: "+credenciales.passUsuario);
    return this.http.post<UsuarioRegistrado>(this.url+'/login',credenciales);
  }
  

}
