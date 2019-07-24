package com.example.proyectoV1.entities;
import java.sql.Date;
import javax.persistence.*;

/**
 * @author Diana
 *
 */
@Entity
@Table(name="reclamosugerencia")
public class ReclamoSugerencia {
	@Id
	@Column (name = "idreclamo")
	@GeneratedValue(strategy= GenerationType.AUTO)
	private int idReclamoSugerencia;
	@Column (name = "idempresa")
	private int idEmpresa; 
	@Column (name = "fechareclamo")
	private Date fechaReclamoSugerencia;
	@Column (name = "detallereclamo")
	private String detalleReclamoSugerencia;
	@Column (name = "usuarioreclamo")
	private int usuarioReclamoSugerencia;
	@Column (name = "idempleado")
	private int idEmpleado; 
	@Column (name = "estado")
	private String estado; 
	@Column (name = "tipo")
	private String tipo;
	@Column (name = "respuesta")
	private String respuestaRS;
	@Column (name = "titulo")
	private String tituloRS;
	@Column (name = "fecharespuesta")
	private Date fechaResuelto;
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//GETTER & SETTER
	public int getIdReclamoSugerencia() {
		return idReclamoSugerencia;
	}
	public void setIdReclamoSugerencia(int idReclamoSugerencia) {
		this.idReclamoSugerencia = idReclamoSugerencia;
	}
	public int getIdEmpresa() {
		return idEmpresa;
	}
	public void setIdEmpresa(int idEmpresa) {
		this.idEmpresa = idEmpresa;
	}
	public Date getFechaReclamoSugerencia() {
		return fechaReclamoSugerencia;
	}
	public void setFechaReclamoSugerencia(Date fechaReclamoSugerencia) {
		this.fechaReclamoSugerencia = fechaReclamoSugerencia;
	}
	public String getDetalleReclamoSugerencia() {
		return detalleReclamoSugerencia;
	}
	public void setDetalleReclamoSugerencia(String detalleReclamoSugerencia) {
		this.detalleReclamoSugerencia = detalleReclamoSugerencia;
	}
	public int getUsuarioReclamoSugerencia() {
		return usuarioReclamoSugerencia;
	}
	public void setUsuarioReclamoSugerencia(int usuarioReclamoSugerencia) {
		this.usuarioReclamoSugerencia = usuarioReclamoSugerencia;
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
	public String getRespuestaRS() {
		return respuestaRS;
	}
	public void setRespuestaRS(String respuestaRS) {
		this.respuestaRS = respuestaRS;
	}
	public String getTituloRS() {
		return tituloRS;
	}
	public void setTituloRS(String tituloRS) {
		this.tituloRS = tituloRS;
	}
	public Date getFechaResuelto() {
		return fechaResuelto;
	}
	public void setFechaResuelto(Date fechaResuelto) {
		this.fechaResuelto = fechaResuelto;
	}
	
 }