package com.example.proyectoV1;
import javax.persistence.*;
@Entity
@Table(name="persona")
public class Persona {
 @Id
 @Column
 @GeneratedValue(strategy= GenerationType.IDENTITY)
 private int id;
 @Column
 private String nombre;
  @Column
  private String apellido;
  
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getNombre() {
	return nombre;
}
public void setNombre(String nombre) {
	this.nombre = nombre;
}
public String getApellido() {
	return apellido;
}
public void setApellido(String apellido) {
	this.apellido = apellido;
}
  
}
