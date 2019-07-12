package com.example.proyectoV1.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.proyectoV1.entities.ReclamoSugerencia;
import com.example.proyectoV1.entities.Usuario;
import com.example.proyectoV1.repositories.ReclamoSugerenciaRepositorio;

@Service
public  class ReclamoSugerenciaServiceImp implements ReclamoSugerenciaService{
	
	@Autowired
	private ReclamoSugerenciaRepositorio repositorio;
	@Override
	public ReclamoSugerencia add(ReclamoSugerencia r) {
		return repositorio.save(r);
	}
	@Override
	public ReclamoSugerencia listarIdReclamoSugerencia(int idReclamoSugerencia) {
		return repositorio.findOne(idReclamoSugerencia);
	}
	
}
