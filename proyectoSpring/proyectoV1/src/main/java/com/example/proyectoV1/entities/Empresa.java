package com.example.proyectoV1.entities;

import javax.persistence.*;

@Entity
@Table (name = "empresa")
public class Empresa {
	@Id
	@Column (name = "idrutempresa")
	private int idRutEmpresa;
	@Column (name = "nombreempresa")
	private String nombreEmpresa;
	@Column (name = "emailempresa")
	private String eMailEmpresa; 
	@Column (name = "tipoempresa")
	private String tipoEmpresa;
	@Column (name = "tagempresa")
	private String tagEmpresa;
	
//////////////////////////////////////////////////////////////////////
//GETTER&SETTER                                                    //
/////////////////////////////////////////////////////////////////////
	public int getIdRutEmpresa() {
		return idRutEmpresa;
	}
	public void setIdRutEmpresa(int idRutEmpresa) {
		this.idRutEmpresa = idRutEmpresa;
	}
	public String getNombreEmpresa() {
		return nombreEmpresa;
	}
	public void setNombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa = nombreEmpresa;
	}
	public String geteMailEmpresa() {
		return eMailEmpresa;
	}
	public void seteMailEmpresa(String eMailEmpresa) {
		this.eMailEmpresa = eMailEmpresa;
	}
	public String getTipoEmpresa() {
		return tipoEmpresa;
	}
	public void setTipoEmpresa(String tipoEmpresa) {
		this.tipoEmpresa = tipoEmpresa;
	}
	public String getTagEmpresa() {
		return tagEmpresa;
	}
	public void setTagEmpresa(String tagEmpresa) {
		this.tagEmpresa = tagEmpresa;
	}
	

	

}
