package com.example.proyectoV1.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.proyectoV1.entities.ReclamoSugerencia;
import com.example.proyectoV1.repositories.ReclamoSujerenciaRepositorio;

@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/ReclamoSujerencia"})
@EnableAutoConfiguration

public class ControladorReclamoSugerencia {
@Autowired
ReclamoSujerenciaRepositorio service;
//y yo soy un terisinosaurio
@GetMapping
	public List<ReclamoSugerencia>Listar(){
		return service.listar(); 
	}
@GetMapping(path= {"/{id} "})
public ResponseEntity<ReclamoSugerencia> listarId(@PathVariable("id")int id) {
	return service.listarID(id);}

@PostMapping
public ResponseEntity<ReclamoSugerencia> agregar(@RequestBody ReclamoSugerencia r) {
	return service.add(r);
}

@DeleteMapping (path= {"/{id}"})
public ReclamoSugerencia eliminar (@RequestBody ReclamoSugerencia r, @PathVariable ("id") int id) {
	return service.delete(r); 
}

@PutMapping(path= {"/{id}"})
public ResponseEntity<ReclamoSugerencia> editar(@RequestBody ReclamoSugerencia r,@PathVariable("id") int id) {
r.setIdReclamo(id);
return service.edit(r);
}

}
