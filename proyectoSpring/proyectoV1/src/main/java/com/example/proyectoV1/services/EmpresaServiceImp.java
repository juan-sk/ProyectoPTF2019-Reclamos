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
	//Agregar
	@Override
	public Empresa add(Empresa e) {
		return repositorio.save(e);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Eliminar
	@Override
	public void delete(int rutEmpresa) {
		repositorio.delete(rutEmpresa);
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de Todas las Empresas
	@Override
	public List<Empresa> listarEmpresa() {
		return repositorio.findAll();
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//Busca una Empresa por su ID
	@Override
	public Empresa idEmpresa(int idEmpresa) {
		return repositorio.findOne(idEmpresa);
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//Busca una Empresa por su nombre
	@Override
	public Empresa nombreEmpresa(String nombreEmpresa) {
		return repositorio.findBynombreEmpresa(nombreEmpresa);
	}


}
