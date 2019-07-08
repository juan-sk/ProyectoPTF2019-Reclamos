package com.example.proyectoV1;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/personas"})
@EnableAutoConfiguration
public class Controlador {
@Autowired
PersonaService service;
@GetMapping
	public List<Persona>Listar(){
		return service.listar(); 
	}
@PostMapping
public Persona agregar(@RequestBody Persona p) {
	return service.add(p);
}
@GetMapping(path= {"/{id} "})
public Persona listarId(@PathVariable("id")int id) {
	return service.listarId(id);
}
@PutMapping(path= {"/{id}"})
public Persona editar(@RequestBody Persona p,@PathVariable("id") int id) {
p.setId(id);
return service.edit(p);
}

}
