package com.example.proyectoV1.entities;
import javax.persistence.*;
@Entity
@Table(name="trabajador")
public class Trabajador {
		   
	 @Id
	 @Column (name= "idtrabajador")
	 private int idTrabajador;
	 @Column (name= "nombretrabajador")
	 private String nombreTrabajador;
	 @Column  (name= "apellidoTrabajador")
	 private String apellidoTrabajador;
	 @Column  (name= "tipotrabajador")    
	 private String tipoTrabajador;
	 @Column  (name= "passTrabajador")
	 private String passTrabajador;
	 
//========================================================================
//Getters & Setters
	public int getIdTrabajador() {
		return idTrabajador;
	}
	public void setIdTrabajador(int idTrabajador) {
		this.idTrabajador = idTrabajador;
	}
	public String getNombreTrabajador() {
		return nombreTrabajador;
	}
	public void setNombreTrabajador(String nombreTrabajador) {
		this.nombreTrabajador = nombreTrabajador;
	}
	public String getApellidoTrabajador() {
		return apellidoTrabajador;
	}
	public void setApellidoTrabajador(String apellidoTrabajador) {
		this.apellidoTrabajador = apellidoTrabajador;
	}
	public String getTipoTrabajador() {
		return tipoTrabajador;
	}
	public void setTipoTrabajador(String tipoTrabajador) {
		this.tipoTrabajador = tipoTrabajador;
	}
	public String getPassTrabajador() {
		return passTrabajador;
	}
	public void setPassTrabajador(String passTrabajador) {
		this.passTrabajador = passTrabajador;
	}


}
