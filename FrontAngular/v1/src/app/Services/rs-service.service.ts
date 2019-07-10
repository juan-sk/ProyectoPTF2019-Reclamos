import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReclamoSujerencia } from '../Modelo/ReclamoSujerencia';

@Injectable({
  providedIn: 'root'
})
export class RsServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/RS'

  crearReclamo(rs:ReclamoSujerencia){
  	return this.http.post<ReclamoSujerencia>(this.url,rs);
  }
}