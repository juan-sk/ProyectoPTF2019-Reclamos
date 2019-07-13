package com.example.proyectoV1.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	@PostMapping
	public Empresa agregar(@RequestBody Empresa e) {
		return service.add(e);
	}
}
