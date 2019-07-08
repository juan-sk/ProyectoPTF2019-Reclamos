package com.example.proyectoV1;

import org.springframework.data.repository.Repository;
import java.util.List;
public interface PersonaRepositorio extends Repository<Persona,Integer>{
	List<Persona>findAll();
	Persona findOne(int id);
	Persona save(Persona p);
	void delete(Persona p);
}
