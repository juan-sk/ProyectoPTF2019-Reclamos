package com.example.proyectoV1.entities;
import java.sql.Date;


import javax.persistence.*;
@Entity
@Table(name="usuarior")
public class Usuario {
	
 @Id
 @Column //(name= )
 private int rutusuario;
 @Column
 private String nombreusuario;
 @Column
 private String apellidousuario;
 @Column        
 private String emailusuario;
 @Column
 private String passusuario;
 @Column
 private Date fechanacusuario;
 @Column
 private int fonousuario;
 @Column
 private String generousuario;
 
//
//==============================================================0
//Get&Set

public int getRutusuario() {
	return rutusuario;
}
public void setRutusuario(int rutusuario) {
	this.rutusuario = rutusuario;
}
public String getNombreusuario() {
	return nombreusuario;
}
public void setNombreusuario(String nombreusuario) {
	this.nombreusuario = nombreusuario;
}
public String getApellidousuario() {
	return apellidousuario;
}
public void setApellidousuario(String apellidousuario) {
	this.apellidousuario = apellidousuario;
}
public String getEmailusuario() {
	return emailusuario;
}
public void setEmailusuario(String emailusuario) {
	this.emailusuario = emailusuario;
}
public String getPassusuario() {
	return passusuario;
}
public void setPassusuario(String passusuario) {
	this.passusuario = passusuario;
}
public Date getFechanacusuario() {
	return fechanacusuario;
}
public void setFechanacusuario(Date fechanacusuario) {
	this.fechanacusuario = fechanacusuario;
}
public int getFonousuario() {
	return fonousuario;
}
public void setFonousuario(int fonousuario) {
	this.fonousuario = fonousuario;
}
public String getGenerousuario() {
	return generousuario;
}
public void setGenerousuario(String generousuario) {
	this.generousuario = generousuario;
}
 
}
