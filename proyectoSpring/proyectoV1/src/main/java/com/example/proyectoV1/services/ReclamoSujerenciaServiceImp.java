package com.example.proyectoV1.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.proyectoV1.entities.ReclamoSujerencia;
import com.example.proyectoV1.repositories.ReclamoSujerenciaRepositorio;

@Service
public abstract class ReclamoSujerenciaServiceImp implements ReclamoSujerenciaService{
	@Autowired
	private ReclamoSujerenciaRepositorio repositorio;
	
	@Override
	public List<ReclamoSujerencia> listar() {
		return repositorio.findAll();	
	}
	@Override
	public ResponseEntity<ReclamoSujerencia> listarID(int id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(repositorio.findOne(id));
				
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); 
		}
	}

	@Override
	public ResponseEntity<ReclamoSujerencia> add(ReclamoSujerencia r) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(repositorio.save(r));
				
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); 
		}
	}

	@Override
	public ReclamoSujerencia edit(ReclamoSujerencia r) {
		return repositorio.update(r);
		
	}

	@Override 
	public ReclamoSujerencia delete(ReclamoSujerencia r) {
		return repositorio.delete(r);
		
	}
}
