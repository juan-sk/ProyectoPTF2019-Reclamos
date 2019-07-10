package com.example.proyectoV1.repositories;

import org.springframework.data.repository.Repository;
import org.springframework.http.ResponseEntity;

import com.example.proyectoV1.entities.ReclamoSujerencia;

import java.util.List;
public interface ReclamoSujerenciaRepositorio extends Repository<ReclamoSujerencia,Integer>{
	List<ReclamoSujerencia>findAll();
	List<ReclamoSujerencia> listar();
	ReclamoSujerencia findOne(int id);
	ReclamoSujerencia save(ReclamoSujerencia r);
	ReclamoSujerencia delete(ReclamoSujerencia r);
	ResponseEntity<ReclamoSujerencia> listarID(int id);
	ResponseEntity<ReclamoSujerencia> add(ReclamoSujerencia r);
	ResponseEntity<ReclamoSujerencia> edit(ReclamoSujerencia r);
	ReclamoSujerencia update(ReclamoSujerencia r);
}
