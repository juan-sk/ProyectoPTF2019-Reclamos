package com.example.proyectoV1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyectoV1.entities.Trabajador;
import com.example.proyectoV1.services.TrabajadorService;

@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Trabajador"})
@EnableAutoConfiguration
public class TrabajadorControlador {
	@Autowired
	TrabajadorService service;
	
	@PostMapping
	public Trabajador agregar(@RequestBody Trabajador t) {
		return service.add(t);
	}
}
