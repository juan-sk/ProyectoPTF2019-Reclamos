package com.example.proyectoV1.repositories;
import java.util.List;
import org.springframework.data.repository.Repository;

import org.springframework.http.ResponseEntity;
import com.example.proyectoV1.entities.Empresa;

import com.example.proyectoV1.entities.ReclamoSugerencia;

public interface EmpresaRepositorio extends Repository<Empresa,Integer>{
	List<Empresa>findAll();
	Empresa save(Empresa e);
	List<Empresa> listar();
	Empresa findOne(int id);
	void delete(Empresa e);
	Empresa add(Empresa e);
	/*
	ResponseEntity<Empresa> listarID(int id);
	ResponseEntity<Empresa> add(Empresa r);
	ResponseEntity<Empresa> edit(Empresa r);
	Empresa update(Empresa r);
	*/
}
