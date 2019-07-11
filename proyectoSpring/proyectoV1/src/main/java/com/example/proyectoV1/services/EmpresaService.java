package com.example.proyectoV1.services;
import java.util.List;
import com.example.proyectoV1.entities.Empresa;

public interface EmpresaService {
		List<Empresa> listar();
		Empresa add(Empresa e);
		Empresa edit(Empresa e);
		Empresa delete(Empresa e);
		
		/*
		ResponseEntity<ReclamoSugerencia> listarID(int id);
		List<Empresa> listar();
		Empresa listarID(int id);
		//Crear y guardar un RS
		Empresa add(Empresa r);
		//Editar un RS
		Empresa edit(Empresa r);
		//Eliminar un RS
		Empresa delete(Empresa r);
		//Guardar un RS */
}
