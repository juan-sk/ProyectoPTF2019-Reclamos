package com.example.proyectoV1.repositories;

import org.springframework.data.repository.Repository;

import com.example.proyectoV1.entities.ReclamoSugerencia;
import com.example.proyectoV1.entities.Usuario;

public interface ReclamoSugerenciaRepositorio extends Repository<ReclamoSugerencia,Integer>{
	ReclamoSugerencia save (ReclamoSugerencia r);
	ReclamoSugerencia findOne(int idReclamoSugerencia);
	
	
}
