package com.example.proyectoV1.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
public class ControladorEmpresa {
	
	@Autowired
	EmpresaService service;
	
	@GetMapping
	public List<Empresa>Listar(){
		return service.listar();
	}
	
	@PostMapping
	public Empresa agregar(@RequestBody Empresa e) {
		return service.add(e);
	}
	
	
	/*
	
	@GetMapping
	public List<Empresa>Listar(){
	return service.listar(); 
	}
	
	@PostMapping
	public Empresa agregar(@RequestBody Empresa p) {
		return service.add(p);
	}
	
	@RequestMapping(value="/{idRutUsuario}", method=RequestMethod.GET)
	public Empresa listarIdRutEmpresa(@PathVariable("idRutEmpresa")int rutEmpresa) {
		return service.listarID(rutEmpresa);
	}
	
	@PutMapping(path= {"/{rutEmpresa}"})
	public Empresa editar(@RequestBody Empresa p,@PathVariable("rutEmpresa") int rutEmpresa){
	p.setIdRutEmpresa(rutEmpresa);
	return service.edit(p);
	} */
	
	
}













