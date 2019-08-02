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
	//agregar: Empresa e -> Empresa
	//recibe una Empresa y la guarda en la DB y devuelve la empresa
	//Ej: agregar(Empresa x) devuelve Empresa
	@PostMapping
	public Empresa agregar(@RequestBody Empresa e) {
		return service.add(e);
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//editarEmpresa: Empresa -> String
	//recibe una Empresa y la sobre escribe en la DB con ediciones, retorna un mensaje de tipo String. 
	//Ej: editarEmpresa(Empresa x) devuelve String "Empresa Editada"
	@RequestMapping(value = "/editar", method = RequestMethod.POST)
	public String editarEmpresa(@RequestBody Empresa x) {
		service.add(x);
		return "Empresa Editada";
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	//deleteEmpresa: int rutEmpresa -> String
	//recibe un rut de tipo int, busca una Empresa por rut y la elimina. Retorna un mensaje de tipo String
	//Ej: deleteEmpresa(int rut) devuelve String "Empresa Eliminada"
	@RequestMapping(value = "/delete/{rutEmpresa}", method = RequestMethod.GET)
	public String deleteEmpresa(@PathVariable("rutEmpresa") int rutEmpresa) {
		service.delete(rutEmpresa);
		return "Empresa Eliminada";
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//nombreEmpresas: void -> ArrayList<String>
	//devuelve un arrayList de los nombres de las empresas de la DB
	//Ej: nombreEmpresas() devuelve ArrayList<String>
	@RequestMapping(value="/{nombre}", method=RequestMethod.GET)
	public ArrayList<String> nombreEmpresas(){
		ArrayList<String> nombresE = new ArrayList<String>();
		for(Empresa x : service.listarEmpresa()) {
			nombresE.add(x.getNombreEmpresa());
		}
		return nombresE;
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//nombrePorId: int -> Empresa
	//Busca una empresa por su rut de tipo int, devuelve la empresa Empresa.
	//Ej: nombrePorId(int rut) devuelve Empresa x
	@RequestMapping(value="/nombre/{id}", method = RequestMethod.GET)
	public Empresa nombrePorId(@PathVariable("id")int idEmpresa) {
		Empresa x = new Empresa();
		x.setNombreEmpresa(service.idEmpresa(idEmpresa).getNombreEmpresa());
		return x;
	}
	////////////////////////////////////////////////////////////////////////////////////////////////
	//idByName: String -> Empresa
	//Busca una empresa por su nombre e la DB, retorna la empresa
	//Ej: idByName(String nombre) devuelve Empresa x
	@RequestMapping(value = "/nombre/id/{nombreEmpresa}", method = RequestMethod.GET)
	public Empresa idByName(@PathVariable("nombreEmpresa") String nombreEmpresa) {
		Empresa x = new Empresa();
		x.setRutEmpresa(service.nombreEmpresa(nombreEmpresa).getRutEmpresa());
		return x;
	}
}