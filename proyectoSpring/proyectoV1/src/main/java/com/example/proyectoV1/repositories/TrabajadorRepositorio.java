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
	//recibe un Trabajador y lo elimina
	//Ej: delete(Trabajador x) devuelve Trabajador
	Trabajador delete(Trabajador t);
	////////////////////////////////////////////////////////////////////////////////////////////////
	//findOne: int -> Trabajador
	//recibe un id de trabajador, lo busca y lo devuelve
	//Ej: findOne(int id) devuelve Trabajador
	Trabajador findOne(int idTrabajador);
	////////////////////////////////////////////////////////////////////////////////////////////////
	//findAll: void -> List<Trabajador>
	//devuelve una lista de todos los trabajadores
	//Ej: findAll() devuelve List<Trabajador>
	List<Trabajador> findAll();
	////////////////////////////////////////////////////////////////////////////////////////////////
	//findByEmpresaAndNombreTrabajadorAndPassTrabajador: String, String, String -> Trabajador
	//busca un trabajador por nombre de empresa, nombre de trabajador y contraseña, devuelve el Trabajador
	//Ej: findByEmpresaAndNombreTrabajadorAndPassTrabajador(String nombreEmpresa,
	//String nombreTrabajador, String passTrabajador) devuelve Trabajador
	Trabajador findByEmpresaAndNombreTrabajadorAndPassTrabajador(String empresa, String nombreTrabajador, String passTrabajador);
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	//findByEmpresa: String -> List<Trabajador>
	//recibe el nombre de una empresa y devuelve una lista de los trabajadores de esa empresa
	//Ej: findByEmpresa(String nombreEmpresa) devuelve List<Trabajador>
	List<Trabajador> findByEmpresa(String empresa);
}
