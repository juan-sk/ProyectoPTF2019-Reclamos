package com.example.proyectoV1.entities;
import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="reclamosujerencia")
public class ReclamoSujerencia {
 @Id
 @Column
 @GeneratedValue(strategy= GenerationType.IDENTITY)
 private int idreclamo;

  /*@Column
  private String tag;*/ 
  private int idempresa; 
  @Column
  private Date fechareclamo;
   @Column
  private String detallereclamo;
  @Column
  private int usuarioreclamo;
  @Column
  private int idempleado; 
  @Column
  private String estado; 
  @Column
  private String tipo;
  
public int getIdReclamo() {
	return idreclamo;
}
public void setIdReclamo(int idreclamo) {
	this.idreclamo = idreclamo;
}
public int getIdEmpresa() {
	return idempresa;
}
public void setIdEmpresa(int idempresa) {
	this.idempresa = idempresa;
}
public Date getFechaReclamo() {
	return fechareclamo;
}
public void setFechaReclamo(Date fechareclamo) {
	this.fechareclamo = fechareclamo;
}
public String getDetalleReclamo() {
	return detallereclamo;
}
public void setDetalleReclamo(String detallereclamo) {
	this.detallereclamo = detallereclamo;
}
public int getUsuarioReclamo() {
	return usuarioreclamo;
}
public void setUsuarioReclamo(int usuarioreclamo) {
	this.usuarioreclamo = usuarioreclamo;
}
public int getIdEmpleado() {
	return idempleado;
}
public void setIdEmpleado(int idempleado) {
	this.idempleado = idempleado;
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