import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EnviarEmailService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/Email'
  
  sendEmail(id:number){
    console.log(this.url+"/"+id);
    return this.http.get(this.url+"/"+id).subscribe();
  }
}
