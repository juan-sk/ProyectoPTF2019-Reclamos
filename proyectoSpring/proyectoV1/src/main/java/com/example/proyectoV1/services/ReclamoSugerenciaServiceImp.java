package com.example.proyectoV1.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.proyectoV1.entities.ReclamoSugerencia;
import com.example.proyectoV1.repositories.ReclamoSugerenciaRepositorio;

@Service
public abstract class ReclamoSugerenciaServiceImp implements ReclamoSugerenciaService{
	@Autowired
	private ReclamoSugerenciaRepositorio repositorio;
	
	@Override
	public List<ReclamoSugerencia> listar() {
		return repositorio.findAll();	
	}
	@Override
	public ResponseEntity<ReclamoSugerencia> listarID(int id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(repositorio.findOne(id));
				//soy un tiranosaurio :3
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); 
		}
	}

	@Override
	public ResponseEntity<ReclamoSugerencia> add(ReclamoSugerencia r) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(repositorio.save(r));
				
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); 
		}
	}

	@Override
	public ReclamoSugerencia edit(ReclamoSugerencia r) {
		return repositorio.update(r);
		
	}

	@Override 
	public ReclamoSugerencia delete(ReclamoSugerencia r) {
		return repositorio.delete(r);
		
	}
}
