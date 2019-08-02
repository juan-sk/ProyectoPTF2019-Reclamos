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
	//add: Trabajador -> Trabajador
	//recibe un Trabajador y lo guarda en la DB, devuelve Trabajador
	//Ej: add(Trabajador x) devuelve Trabajador x	@Override
	public Trabajador add(Trabajador t) {
		return repositorio.save(t);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////
	//delete: Trabajador -> Trabajador
	//recibe un Trabajador y lo elimina de la DB, devuelve trabajador
	//Ej: delete(Trabajador x) devuelve Trabajador	@Override
	public Trabajador delete(Trabajador p) {
		return repositorio.delete(p);
	}	
	///////////////////////////////////////////////////////////////////////////////////////////////
	//Listar: void -> List<Trabajador>
	//Devuelve una lista de todos los trabajadores
	//Ej: listar() devuelve List<Trabajador>	@Override
	public List<Trabajador> listar() {
		return repositorio.findAll();
	}
	///////////////////////////////////////////////////////////////////////////////////////////////
	//buscarUno: int -> Trabajador
	//recibe un id de trabajador, lo busca y lo devuelve
	//Ej: buscarUno(int id) devuelve Trabajador	@Override
	public Trabajador buscarUno(int idTrabajador) {
		return repositorio.findOne(idTrabajador);
	}
	////////////////////////////////////////////////////////////////////////////////////////////////
	//logIn: Trabajador -> Trabajador
	//recibe un Trabajador, lo compara con la DB, si coincide devuelve el Trabajador
	//si no, lanza una Excepcion
	//Ej: logIn(Trabajador x) devuelve Trabajador	@Override
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
	//empleadosPorEmpresa: String -> List<Trabajador>
	//recibe un nombre de empresa y devuelve una lista de todos los trabajadores de esa Empresa
	//Ej: empleadosPorEmpresa(String nombre) devuelve List<Trabajador>
	@Override
	public List<Trabajador> empleadosPorEmpresa(String empresa) {
		return repositorio.findByEmpresa(empresa);
	}


}
