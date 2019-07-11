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

import com.example.proyectoV1.entities.Usuario;
import com.example.proyectoV1.services.UsuarioService;
@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Usuario"})
@EnableAutoConfiguration
public class ControladorUsuario {
	

@Autowired
UsuarioService service;

@GetMapping
public List<Usuario>Listar(){
return service.listar(); 
}
 
@PostMapping
public Usuario agregar(@RequestBody Usuario p) {
	return service.add(p);
}

@RequestMapping(value="/{rutUsuario}", method=RequestMethod.GET)
public Usuario listarRutUsuario(@PathVariable("rutUsuario")int rutusuario) {
	System.out.println("dendro de editar");
	return service.listarId_RutUsuario(rutusuario);
}

@PutMapping(path= {"/{rutUsuario}"})
public Usuario editar(@RequestBody Usuario p,@PathVariable("rutUsuario") int rutusuario){
	System.out.println("dendro de editar");
p.setRutUsuario(rutusuario);
return service.edit(p);
}

/*
@PostMapping(path= {"/login"})
public boolean logIn(@RequestBody Usuario p){
	
	return service.logIn(p); */

@PostMapping (path= {"/login"})
public ResponseEntity<Usuario> logIn(@RequestBody Usuario p){
	
	return service.logIn(p);
}


}
