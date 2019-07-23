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
import com.example.proyectoV1.entities.Empresa;
import com.example.proyectoV1.services.EmpresaService;
@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Empresa"})
@EnableAutoConfiguration
public class EmpresaControlador {
	@Autowired
	EmpresaService service;
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//Agregar	
	@PostMapping
	public Empresa agregar(@RequestBody Empresa e) {
		return service.add(e);
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//Editar
	@RequestMapping(value = "/editar", method = RequestMethod.POST)
	public String editarEmpresa(@RequestBody Empresa x) {
		service.add(x);
		return "Empresa Editada";
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	//Eliminar
	@RequestMapping(value = "/delete/{rutEmpresa}", method = RequestMethod.GET)
	public String deleteEmpresa(@PathVariable("rutEmpresa") int rutEmpresa) {
		service.delete(rutEmpresa);
		return "Empresa Eliminada";
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de nombres de Empresas
	@RequestMapping(value="/{nombre}", method=RequestMethod.GET)
	public ArrayList<String> nombreEmpresas(){
		ArrayList<String> nombresE = new ArrayList<String>();
		for(Empresa x : service.listarEmpresa()) {
			nombresE.add(x.getNombreEmpresa());
		}
		return nombresE;
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//Busca una Empresa por su ID	
	@RequestMapping(value="/nombre/{id}", method = RequestMethod.GET)
	public Empresa nombrePorId(@PathVariable("id")int idEmpresa) {
		Empresa x = new Empresa();
		x.setNombreEmpresa(service.idEmpresa(idEmpresa).getNombreEmpresa());
		return x;
	}
	////////////////////////////////////////////////////////////////////////////////////////////////
	//Busca una Empresa por su Nombre
	@RequestMapping(value = "/nombre/id/{nombreEmpresa}", method = RequestMethod.GET)
	public Empresa idByName(@PathVariable("nombreEmpresa") String nombreEmpresa) {
		Empresa x = new Empresa();
		x.setRutEmpresa(service.nombreEmpresa(nombreEmpresa).getRutEmpresa());
		return x;
	}
}