package com.example.proyectoV1.services;
import java.util.List;

import com.example.proyectoV1.entities.Empresa;
public interface EmpresaService {
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//add: Empresa -> Empresa
	//recibe una Empresa y la guarda en la DB, devuelve Empresa
	//Ej: add(Empresa x) devuelve Empresa
	Empresa add(Empresa e);
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//delete: int -> void
	//recibe un rut de empresa, la busca y la elimina. 
	//Ej: delete(int rut)
	void delete(int rutEmpresa);
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//listarEmpresa: void -> List<Empresa>
	//devuelve una lista de todas las empresas de la DB
	//Ej: listarEmpresa() devuelve List<Empresa>
	List<Empresa> listarEmpresa();
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//idEmpresa: int -> Empresa
	//recibe un id de empresa, la busca y la devuelve
	//Ej: idEmpresa(int idEmpresa) devuelve Empresa
	Empresa idEmpresa(int idEmpresa);
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//nombreEmpresa: String -> Empresa
	//recibe un nombre de empresa, la busca y la devuelve
	//Ej: nombreEmpresa(String nombre) devuelve Empresas
	Empresa nombreEmpresa(String nombreEmpresa);
}
