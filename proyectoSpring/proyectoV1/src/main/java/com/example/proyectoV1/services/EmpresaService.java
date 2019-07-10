package com.example.proyectoV1.services;

public class EmpresaService {
		List<ReclamoSugerencia> listar();
		ResponseEntity<ReclamoSugerencia> listarID(int id);
		//Crear y guardar un RS
		ResponseEntity<ReclamoSugerencia> add(ReclamoSugerencia r);
		//Editar un RS
		ReclamoSugerencia edit(ReclamoSugerencia r);
		//Eliminar un RS
		ReclamoSugerencia delete(ReclamoSugerencia r);
		//Guardar un RS
}
