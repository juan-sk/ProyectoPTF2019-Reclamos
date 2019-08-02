/*----------------------------*/
/* SERVICIO DE ENVIO DE EMAIL */
/*----------------------------*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EnviarEmailService {

  constructor(private http:HttpClient) { }
  url='http://35.198.4.197:8080/Email'
  //sendEmail(number): number->getPetition
  //se conecta a la url 'http://35.198.4.197:8080/Email'+"/"+id
  //sinedo el id pasado omo parametro y un id valido del usuario 
  //el back end genera automaticamente un email que sera enviado
  // al usuario con el id espesificado como parametro 
  sendEmail(id:number){
    return this.http.get(this.url+"/"+id).subscribe();
  }
}
