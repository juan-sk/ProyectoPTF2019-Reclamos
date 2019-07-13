package com.example.proyectoV1.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
	@Entity
	@Table(name="empresa")
	public class Empresa {
			   
		 @Id
		 @Column (name= "idrutempresa")
		 private int rutEmpresa;
		 @Column (name= "nombreempresa")
		 private String nombreEmpresa;
		 @Column  (name= "emailempresa")
		 private String emailEmpresa;
		 @Column  (name= "tipoempresa")    
		 private String tipoEmpresa;
		 @Column  (name= "tagempresa")
		 private String tagEmpresa;
		 //deberia tener contraseña
		 
		//Setters & Getters 
		public int getRutEmpresa() {
			return rutEmpresa;
		}
		public void setRutEmpresa(int rutEmpresa) {
			this.rutEmpresa = rutEmpresa;
		}
		public String getNombreEmpresa() {
			return nombreEmpresa;
		}
		public void setNombreEmpresa(String nombreEmpresa) {
			this.nombreEmpresa = nombreEmpresa;
		}
		public String getEmailEmpresa() {
			return emailEmpresa;
		}
		public void setEmailEmpresa(String emailEmpresa) {
			this.emailEmpresa = emailEmpresa;
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
