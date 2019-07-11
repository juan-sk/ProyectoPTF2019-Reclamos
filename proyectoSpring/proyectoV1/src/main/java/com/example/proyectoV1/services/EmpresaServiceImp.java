package com.example.proyectoV1.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Empresa;
import com.example.proyectoV1.repositories.EmpresaRepositorio;
@Service
public class EmpresaServiceImp implements EmpresaService{

	@Autowired
	private EmpresaRepositorio repositorio;

	@Override
	public List<Empresa> listar() {
		return repositorio.findAll();
	}

	@Override
	public Empresa add(Empresa e) {
		return repositorio.save(e);
	}

	@Override
	public Empresa edit(Empresa e) {
		return null;
	}

	@Override
	public Empresa delete(Empresa e) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	/*

	@Override
	public List<Empresa> listar(){
		return repositorio.findAll();	
	}

	@Override
	public Empresa listarID(int id) {
		return repositorio.findOne(id);
	}

	@Override
	public Empresa add(Empresa r) {
		return repositorio.save(r);
	}

	@Override
	public Empresa edit(Empresa r) {
		return repositorio.update(r);
	}

	@Override
	public Empresa delete(Empresa r) {
		return repositorio.delete(r);
	} */
}

