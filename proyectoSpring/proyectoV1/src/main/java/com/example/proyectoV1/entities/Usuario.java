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
<<<<<<< Upstream, based on branch 'master' of https://github.com/Karukami/ProyectoPTF2019-Reclamos.git
 private int fonousuario;
=======
 private int fonoUsuario;
>>>>>>> 144e94b me falto un atributo por cambiar
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
public int getFonousuario() {
	return fonoUsuario;
}
public void setFonousuario(int fonousuario) {
	this.fonoUsuario = fonousuario;
}
public String getGeneroUsuario() {
	return generoUsuario;
}
public void setGeneroUsuario(String generoUsuario) {
	this.generoUsuario = generoUsuario;
}
 



 
}
