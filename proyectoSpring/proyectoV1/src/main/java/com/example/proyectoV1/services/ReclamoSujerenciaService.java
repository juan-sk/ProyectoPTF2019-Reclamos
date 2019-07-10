package com.example.proyectoV1.services;
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.proyectoV1.entities.ReclamoSujerencia;

public interface ReclamoSujerenciaService {	
	List<ReclamoSujerencia> listar();
	ResponseEntity<ReclamoSujerencia> listarID(int id);
	//Crear y guardar un RS
	ResponseEntity<ReclamoSujerencia> add(ReclamoSujerencia r);
	//Editar un RS
	ReclamoSujerencia edit(ReclamoSujerencia r);
	//Eliminar un RS
	ReclamoSujerencia delete(ReclamoSujerencia r);
	//Guardar un RS
}
