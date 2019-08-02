package com.example.proyectoV1.repositories;
import java.util.List;

import org.springframework.data.repository.Repository;
import com.example.proyectoV1.entities.Empresa;

public interface EmpresaRepositorio extends Repository<Empresa,Integer>{
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//save: Empresa -> Empresa
	//recibe una Empresa y la guarda en la DB, retorna la Empresa
	//Ej: save(Empresa x) devuelve Empresa x
	Empresa save(Empresa e);
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//delete: int -> void
	//recibe un rut de empresa de tipo int, y la elimina. 
	//Ej: delete(int rut) 
	void delete(int rutEmpresa);
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//findBy: int -> Empresa
	//Busca una empresa por su rut, devuelve esa empresa
	//Ej: findOne(int rut) devuelve Empresa 
	Empresa findOne(int rutEmpresa);
	////////////////////////////////////////////////////////////////////////////////////////////////
	//findAll: void -> List<Empresa>
	//devuelve una lista de todas las Empresas de la DB
	//Ej: findAll() devuelve List<Empresa>
	List<Empresa> findAll();
	////////////////////////////////////////////////////////////////////////////////////////////////
	//findBynombeEmpresa: String -> Empresa
	//Busca una empresa por su nombre y la retorna
	//Ej: findBynombreEmpresa(String nombre) devuelve Empresa
	Empresa findBynombreEmpresa(String nombreEmpresa);
	
}
