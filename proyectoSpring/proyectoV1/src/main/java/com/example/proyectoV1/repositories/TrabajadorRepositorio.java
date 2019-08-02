package com.example.proyectoV1.repositories;
import java.util.List;

import org.springframework.data.repository.Repository;
import com.example.proyectoV1.entities.Trabajador;


public interface TrabajadorRepositorio extends Repository<Trabajador,Integer>{
	////////////////////////////////////////////////////////////////////////////////////////////////
	//save: Trabajador -> Trabajador
	//Recibe un Trabajador y lo guarda en la DB, retorna el Trabajador
	//Ej: save(Trabajador x) devuelve Trabajador x
	Trabajador save(Trabajador t);
    ////////////////////////////////////////////////////////////////////////////////////////////////
	//delete: Trabajador -> Trabajador
	//
	Trabajador delete(Trabajador t);
	////////////////////////////////////////////////////////////////////////////////////////////////
	//Encontrar un Trabajador por ID
	Trabajador findOne(int idTrabajador);
	////////////////////////////////////////////////////////////////////////////////////////////////
	//Listar todos los trabajadores
	List<Trabajador> findAll();
	////////////////////////////////////////////////////////////////////////////////////////////////
	//Buscar trabajador por nombre empresa, nombre trabajador y pass trabajador
	Trabajador findByEmpresaAndNombreTrabajadorAndPassTrabajador(String empresa, String nombreTrabajador, String passTrabajador);
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de trabajadores por empresa
	List<Trabajador> findByEmpresa(String empresa);
}
