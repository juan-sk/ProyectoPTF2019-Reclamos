package com.example.proyectoV1.repositories;

import org.springframework.data.repository.Repository;
import org.springframework.http.ResponseEntity;

import com.example.proyectoV1.entities.ReclamoSugerencia;

import java.util.List;
public interface ReclamoSujerenciaRepositorio extends Repository<ReclamoSugerencia,Integer>{
	List<ReclamoSugerencia>findAll();
	List<ReclamoSugerencia> listar();
	ReclamoSugerencia findOne(int id);
	ReclamoSugerencia save(ReclamoSugerencia r);
	ReclamoSugerencia delete(ReclamoSugerencia r);
	ResponseEntity<ReclamoSugerencia> listarID(int id);
	ResponseEntity<ReclamoSugerencia> add(ReclamoSugerencia r);
	ResponseEntity<ReclamoSugerencia> edit(ReclamoSugerencia r);
	ReclamoSugerencia update(ReclamoSugerencia r);
}
