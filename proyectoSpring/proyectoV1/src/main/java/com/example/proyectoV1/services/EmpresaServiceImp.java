package com.example.proyectoV1.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Empresa;
import com.example.proyectoV1.repositories.EmpresaRepositorio;
@Service
public class EmpresaServiceImp implements EmpresaService{

	@Autowired
	EmpresaRepositorio repositorio;
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//add: Empresa -> Empresa
	//recibe una Empresa y la guarda en la DB, devuelve Empresa
	//Ej: add(Empresa x) devuelve Empresa	@Override
	public Empresa add(Empresa e) {
		return repositorio.save(e);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//delete: int -> void
	//recibe un rut de empresa, la busca y la elimina. 
	//Ej: delete(int rut)	@Override
	public void delete(int rutEmpresa) {
		repositorio.delete(rutEmpresa);
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//listarEmpresa: void -> List<Empresa>
	//devuelve una lista de todas las empresas de la DB
	//Ej: listarEmpresa() devuelve List<Empresa>	@Override
	public List<Empresa> listarEmpresa() {
		return repositorio.findAll();
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//idEmpresa: int -> Empresa
	//recibe un id de empresa, la busca y la devuelve
	//Ej: idEmpresa(int idEmpresa) devuelve Empresa	@Override
	public Empresa idEmpresa(int idEmpresa) {
		return repositorio.findOne(idEmpresa);
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//nombreEmpresa: String -> Empresa
	//recibe un nombre de empresa, la busca y la devuelve
	//Ej: nombreEmpresa(String nombre) devuelve Empresas	@Override
	public Empresa nombreEmpresa(String nombreEmpresa) {
		return repositorio.findBynombreEmpresa(nombreEmpresa);
	}


}
