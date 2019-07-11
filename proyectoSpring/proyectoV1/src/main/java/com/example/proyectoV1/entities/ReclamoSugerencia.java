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
public void setIdReclamo(int idreclamo) {
	this.idReclamo = idreclamo;
}
public int getIdEmpresa() {
	return idEmpresa;
}
public void setIdEmpresa(int idempresa) {
	this.idEmpresa = idempresa;
}
public Date getFechaReclamo() {
	return fechaReclamo;
}
public void setFechaReclamo(Date fechareclamo) {
	this.fechaReclamo = fechareclamo;
}
public String getDetalleReclamo() {
	return detalleReclamo;
}
public void setDetalleReclamo(String detallereclamo) {
	this.detalleReclamo = detallereclamo;
}
public int getUsuarioReclamo() {
	return usuarioReclamo;
}
public void setUsuarioReclamo(int usuarioreclamo) {
	this.usuarioReclamo = usuarioreclamo;
}
public int getIdEmpleado() {
	return idEmpleado;
}
public void setIdEmpleado(int idempleado) {
	this.idEmpleado = idempleado;
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
   
  
   
 }