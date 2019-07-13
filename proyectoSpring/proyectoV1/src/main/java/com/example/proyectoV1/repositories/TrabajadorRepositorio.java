package com.example.proyectoV1.repositories;
import org.springframework.data.repository.Repository;
import com.example.proyectoV1.entities.Trabajador;

public interface TrabajadorRepositorio extends Repository<Trabajador,Integer>{
	Trabajador save(Trabajador t);
	Trabajador findOne(int idTrabajador);
}
