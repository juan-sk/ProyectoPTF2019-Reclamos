package com.example.proyectoV1.entities;
import java.sql.Date;

import javax.persistence.*;
@Entity
@Table(name="usuarior")
public class Usuario {
	   
 @Id
 @Column (name= "rutusuario")
 private int rutUsuario;
 @Column (name= "nombreusuario")
 private String nombreUsuario;
 @Column  (name= "apellidousuario")
 private String apellidoUsuario;
 @Column  (name= "emailusuario")    
 private String emailUsuario;
 @Column  (name= "passusuario")
 private String passUsuario;
 @Column  (name= "fechanacusuario")
 private Date fechaNacUsuario;
 @Column  (name= "fonousuario")
 private int fonoUsuario;
 @Column  (name= "generousuario")
 private String generoUsuario;
  
//==============================================================0
//Get&Set
 
public int getRutUsuario() {
	return rutUsuario;
}
public void setRutUsuario(int rutUsuario) {
	this.rutUsuario = rutUsuario;
}
public String getNombreUsuario() {
	return nombreUsuario;
}
public void setNombreUsuario(String nombreUsuario) {
	this.nombreUsuario = nombreUsuario;
}
public String getApellidoUsuario() {
	return apellidoUsuario;
}
public void setApellidoUsuario(String apellidoUsuario) {
	this.apellidoUsuario = apellidoUsuario;
}
public String getEmailUsuario() {
	return emailUsuario;
}
public void setEmailUsuario(String emailUsuario) {
	this.emailUsuario = emailUsuario;
}
public String getPassUsuario() {
	return passUsuario;
}
public void setPassUsuario(String passUsuario) {
	this.passUsuario = passUsuario;
}
public Date getFechaNacUsuario() {
	return fechaNacUsuario;
}
public void setFechaNacUsuario(Date fechaNacUsuario) {
	this.fechaNacUsuario = fechaNacUsuario;
}
public int getFonoUsuario() {
	return fonoUsuario;
}
public void setFonoUsuario(int fonoUsuario) {
	this.fonoUsuario = fonoUsuario;
}
public String getGeneroUsuario() {
	return generoUsuario;
}
public void setGeneroUsuario(String generoUsuario) {
	this.generoUsuario = generoUsuario;
}  
 
}
