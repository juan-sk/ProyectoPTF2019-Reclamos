import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/proyectoV1/usuarioregistrado'
}
/**
 * Error creating bean with name 'controlador': Unsatisfied dependency expressed through field 
 * 'service'; nested exception is org.springframework.beans.factory.UnsatisfiedDependencyException:
 *  Error creating bean with name 'servicioUsuarioRegistradoImplement': Unsatisfied dependency expressed 
 * through field 'repositorio'; nested exception is org.springframework.beans.factory.BeanCreationException: 
 * Error creating bean with name 'usuarioRepositorio': Invocation of init method failed; nested exception is
 *  java.lang.IllegalArgumentException: Failed to create query for method public abstract com.example.proyectoV1.UsuarioRegistrado
 *  com.example.proyectoV1.UsuarioRepositorio.findOne(java.lang.String)! No property findOne found for type UsuarioRegistrado!
	
 */