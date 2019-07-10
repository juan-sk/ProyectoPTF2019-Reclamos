import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RS } from '../Modelo/RS';

@Injectable({
  providedIn: 'root'
})
export class RsServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/RS'

  crearReclamo(rs:RS){
  	return this.http.post<RS>(this.url,rs);
  }
}