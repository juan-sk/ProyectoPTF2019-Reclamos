package com.example.proyectoV1.entities;
import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="reclamosugerencia")
public class ReclamoSugerencia {
 @Id
 @Column (name = "idreclamo")
 @GeneratedValue(strategy= GenerationType.IDENTITY)
 private int idReclamo;

  /*@Column
  private String tag;*/ 
  private int idEmpresa; 
  @Column (name = "fechareclamo")
  private Date fechaReclamo;
   @Column (name = "detallereclamo")
  private String detalleReclamo;
  @Column (name = "usuarioreclamo")
  private int usuarioReclamo;
  @Column (name = "idempleado")
  private int idEmpleado; 
  @Column (name = "estado")
  private String estado; 
  @Column (name = "tipo")
  private String tipo;
public int getIdReclamo() {
	return idReclamo;
}
public void setIdReclamo(int idReclamo) {
	this.idReclamo = idReclamo;
}
public int getIdEmpresa() {
	return idEmpresa;
}
public void setIdEmpresa(int idEmpresa) {
	this.idEmpresa = idEmpresa;
}
public Date getFechaReclamo() {
	return fechaReclamo;
}
public void setFechaReclamo(Date fechaReclamo) {
	this.fechaReclamo = fechaReclamo;
}
public String getDetalleReclamo() {
	return detalleReclamo;
}
public void setDetalleReclamo(String detalleReclamo) {
	this.detalleReclamo = detalleReclamo;
}
public int getUsuarioReclamo() {
	return usuarioReclamo;
}
public void setUsuarioReclamo(int usuarioReclamo) {
	this.usuarioReclamo = usuarioReclamo;
}
public int getIdEmpleado() {
	return idEmpleado;
}
public void setIdEmpleado(int idEmpleado) {
	this.idEmpleado = idEmpleado;
}
public String getEstado() {
	return estado;
}
public void setEstado(String estado) {
	this.estado = estado;
}
public String getTipo() {
	return tipo;
}
public void setTipo(String tipo) {
	this.tipo = tipo;
}
  
public void listar() {
	System.out.print("parece que funcioan");
}
  
   
 }