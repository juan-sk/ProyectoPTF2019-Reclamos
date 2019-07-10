package com.example.proyectoV1.repositories;

import java.util.List;

import org.springframework.data.repository.Repository;
import org.springframework.http.ResponseEntity;

import com.example.proyectoV1.entities.ReclamoSugerencia;

public class EmpresaRepositorio extends Repository<ReclamoSugerencia,Integer>{
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

