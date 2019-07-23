package com.example.proyectoV1.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Trabajador;
import com.example.proyectoV1.exceptions.LoginException;
import com.example.proyectoV1.repositories.TrabajadorRepositorio;
@Service
public class TrabajadorServiceImp implements TrabajadorService{
	@Autowired
	TrabajadorRepositorio repositorio;
	///////////////////////////////////////////////////////////////////////////////////////////////
	//Agregar
	@Override
	public Trabajador add(Trabajador t) {
		return repositorio.save(t);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////
	//Eliminar
	@Override
	public Trabajador delete(Trabajador p) {
		return repositorio.delete(p);
	}	
	///////////////////////////////////////////////////////////////////////////////////////////////
	//Listar todos los trabajadores
	@Override
	public List<Trabajador> listar() {
		return repositorio.findAll();
	}
	///////////////////////////////////////////////////////////////////////////////////////////////
	//Encontrar un trabajador por ID
	@Override
	public Trabajador buscarUno(int idTrabajador) {
		return repositorio.findOne(idTrabajador);
	}
	////////////////////////////////////////////////////////////////////////////////////////////////
	//LogIn trabajador
	@Override
	public Trabajador logIn(Trabajador t) throws LoginException{
		Trabajador trabajadorAVerificar = t;
			String nombreTrabajador = t.getNombreTrabajador();
			String passTrabajador = t.getPassTrabajador();
			String empresa= t.getEmpresa();
			trabajadorAVerificar = repositorio.findByEmpresaAndNombreTrabajadorAndPassTrabajador(empresa,nombreTrabajador,passTrabajador);
			if(trabajadorAVerificar==null) {
				throw new LoginException();
			}
			return trabajadorAVerificar;
	}
	@Override
	public List<Trabajador> empleadosPorEmpresa(String empresa) {
		return repositorio.findByEmpresa(empresa);
	}


}
