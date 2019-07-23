package com.example.proyectoV1.controller;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyectoV1.entities.ReclamoSugerencia;
import com.example.proyectoV1.services.ReclamoSugerenciaService;
@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/ReclamoSugerencia"})
@EnableAutoConfiguration
public class ReclamoSugerenciaControlador { 
	@Autowired
	ReclamoSugerenciaService service;
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//Agregar
	@PostMapping
	public ReclamoSugerencia agregar(@RequestBody ReclamoSugerencia r) {
		return service.add(r);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista RS de un Usuario
	@RequestMapping(value="/{idReclamo}", method=RequestMethod.GET)
	public ReclamoSugerencia listarId(@PathVariable("idReclamo")int rutusuario) {
		System.out.println("dentro de editar");
		return service.listarIdReclamoSugerencia(rutusuario);
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//Agrega una Respuesta al RS
	@RequestMapping(value = "/responder", method = RequestMethod.POST)
	public ReclamoSugerencia responderRS(@RequestBody ReclamoSugerencia x) {
		return service.add(x);
	}
	////////////////////////////////////////////////////////////////////////////////////////////////
	//Busca la ID del ultimo RS de un usuario por su Rut
	@RequestMapping(value = "/id/{usuarioReclamoSugerencia}",method = RequestMethod.GET)
	public ReclamoSugerencia rsByUser (@PathVariable("usuarioReclamoSugerencia")int usuarioReclamoSugerencia) {
		ArrayList<ReclamoSugerencia> rsUser = (ArrayList<ReclamoSugerencia>) service.rsByusuarioReclamoSugerencia(usuarioReclamoSugerencia);
		ReclamoSugerencia xd = new ReclamoSugerencia();
		xd.setIdReclamoSugerencia(rsUser.get(rsUser.size()-1).getIdReclamoSugerencia());
		return xd;
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Busca la ID del ultimo reclamo de todos
	@RequestMapping(value = "/id/last", method = RequestMethod.GET)
	public ReclamoSugerencia lastRS() {
		ArrayList<ReclamoSugerencia> ReclamosS = (ArrayList<ReclamoSugerencia>) service.listarTodo();
		ReclamoSugerencia lastidrs = new ReclamoSugerencia();
		lastidrs.setIdReclamoSugerencia(ReclamosS.get(ReclamosS.size()-1).getIdReclamoSugerencia());
		return lastidrs;
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de Rs por Id Empresa
	@RequestMapping(value="/listar/rs/{idEmpresa}" , method = RequestMethod.GET)
	public ArrayList<ReclamoSugerencia> rsByIdEmpresas(@PathVariable("idEmpresa") int idEmpresa){
		ArrayList<ReclamoSugerencia> listaRSByidEmpresa = (ArrayList<ReclamoSugerencia>) service.listarByidEmpresa(idEmpresa);
		return listaRSByidEmpresa;
	}
	////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de rs por id usuario
	@RequestMapping(value = "/listar/{usuarioReclamoSugerencia}", method = RequestMethod.GET)
	public ArrayList<ReclamoSugerencia> rsByUsuario(@PathVariable("usuarioReclamoSugerencia")int usuarioReclamoSugerencia){
		ArrayList<ReclamoSugerencia> listaRSUsuario = (ArrayList<ReclamoSugerencia>) service.rsByusuarioReclamoSugerencia(usuarioReclamoSugerencia);
		return listaRSUsuario;
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de sugerencias por id Empresa
	@RequestMapping(value = "/listar/s/{idEmpresa}",method = RequestMethod.GET)
	public ArrayList<ReclamoSugerencia> sugerenciaByIdEmpresa(@PathVariable ("idEmpresa") int idEmpresa){
		String tipo = "sugerencia";
		ArrayList<ReclamoSugerencia> sByEmpresa = (ArrayList<ReclamoSugerencia>) service.tipoByIdEmpresas(idEmpresa, tipo);
		return sByEmpresa;	
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de reclamos por id Empresa
	@RequestMapping(value = "/listar/r/{idEmpresa}", method = RequestMethod.GET)
	public ArrayList<ReclamoSugerencia> reclamoByIdEmpresa(@PathVariable ("idEmpresa") int idEmpresa){
		String tipo = "reclamo";
		ArrayList<ReclamoSugerencia> rByEmpresa = (ArrayList<ReclamoSugerencia>) service.tipoByIdEmpresas(idEmpresa, tipo);
		return rByEmpresa;
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//Cantidad de Rreclamos y de Sugerencias por id empresa
	@RequestMapping(value = "/Estadistica/{idEmpresa}", method = RequestMethod.GET)
	public int[] cantRSByIdEmpresa(@PathVariable ("idEmpresa")int idEmpresa) {
		int [] estadisticas = new int[2];
		estadisticas[0] =service.tipoByIdEmpresas(idEmpresa, "sugerencia").size();
		estadisticas[1] = service.tipoByIdEmpresas(idEmpresa, "reclamo").size();
		return estadisticas;
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//Setea un Trabajador a un RS
	@RequestMapping(value = "/setTrabajador/{idTrabajador}", method = RequestMethod.POST)
	public ReclamoSugerencia setearTrabajador(@RequestBody ReclamoSugerencia x, @PathVariable("idTrabajador") int idTrabajador) {
		x.setIdEmpleado(idTrabajador);
		return service.add(x); 
	}
	
}























