import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReclamoSugerencia } from '../Modelo/ReclamoSugerencia';

@Injectable({
  providedIn: 'root'
})
export class RsServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/RS'

  crearReclamo(rs:ReclamoSugerencia){
  	return this.http.post<ReclamoSugerencia>(this.url,rs);
  }
}