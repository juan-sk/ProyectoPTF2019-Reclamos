package com.example.proyectoV1.controller;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyectoV1.entities.Trabajador;
import com.example.proyectoV1.exceptions.LoginException;
import com.example.proyectoV1.services.EmpresaService;
import com.example.proyectoV1.services.TrabajadorService;

@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Trabajador"})
@EnableAutoConfiguration
public class TrabajadorControlador {
	@Autowired
	TrabajadorService service;
	@Autowired
	EmpresaService serviceE;
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//Agregar
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public Trabajador agregar(@RequestBody Trabajador t) {
		return service.add(t);
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//Editar
	@RequestMapping(value = "/editar", method = RequestMethod.POST)
	public String editarTrabajador(@RequestBody Trabajador x) {
		service.add(x);
		return "Trabajador Editado";
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//Eliminar
	@RequestMapping(value = "/delete/{idTrabajador}", method = RequestMethod.GET)
	public void deleteTrabajador(@PathVariable("idTrabajador") int idTrabajador) {
		service.delete(service.buscarUno(idTrabajador));
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de todos los trabajadores
	@GetMapping
	public List<Trabajador> listar(){
		return service.listar();
	} 
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//Listar trabajadores por empresa
	@RequestMapping (value = "/{idEmpresa}", method=RequestMethod.GET)
	public ArrayList<Trabajador> trabajadoresByEmpresa(@PathVariable("idEmpresa")int idEmpresa){
		ArrayList<Trabajador> trabajadores = (ArrayList<Trabajador>) service.empleadosPorEmpresa(serviceE.idEmpresa(idEmpresa).getNombreEmpresa());
		return trabajadores;
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//LogIn de Trabajador
	@PostMapping (path= {"/login"})
	public ResponseEntity<Trabajador> logIn(@RequestBody Trabajador t){
		 try {
			Trabajador trabajador = service.logIn(t);
			return ResponseEntity.status(HttpStatus.OK).body(trabajador);
		} catch (LoginException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}
	
}




















    