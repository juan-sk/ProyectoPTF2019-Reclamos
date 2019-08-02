package com.example.proyectoV1.services;
import java.util.List;
import com.example.proyectoV1.entities.Trabajador;
import com.example.proyectoV1.exceptions.LoginException;

public interface TrabajadorService {
	////////////////////////////////////////////////////////////////////////////////////////////////
	//add: Trabajador -> Trabajador
	//recibe un Trabajador y lo guarda en la DB, devuelve Trabajador
	//Ej: add(Trabajador x) devuelve Trabajador x
	Trabajador add(Trabajador t);
	////////////////////////////////////////////////////////////////////////////////////////////////
	//delete: Trabajador -> Trabajador
	//recibe un Trabajador y lo elimina de la DB, devuelve trabajador
	//Ej: delete(Trabajador x) devuelve Trabajador
	Trabajador delete(Trabajador p);
	////////////////////////////////////////////////////////////////////////////////////////////////
	//Listar: void -> List<Trabajador>
	//Devuelve una lista de todos los trabajadores
	//Ej: listar() devuelve List<Trabajador>
	List<Trabajador>listar();
	////////////////////////////////////////////////////////////////////////////////////////////////
	//buscarUno: int -> Trabajador
	//recibe un id de trabajador, lo busca y lo devuelve
	//Ej: buscarUno(int id) devuelve Trabajador
	Trabajador buscarUno(int idTrabajador);
	////////////////////////////////////////////////////////////////////////////////////////////////
	//logIn: Trabajador -> Trabajador
	//recibe un Trabajador, lo compara con la DB, si coincide devuelve el Trabajador
	//si no, lanza una Excepcion
	//Ej: logIn(Trabajador x) devuelve Trabajador
	public Trabajador logIn(Trabajador t) throws LoginException;
	//empleadosPorEmpresa: String -> List<Trabajador>
	//recibe un nombre de empresa y devuelve una lista de todos los trabajadores de esa Empresa
	//Ej: empleadosPorEmpresa(String nombre) devuelve List<Trabajador>
	List<Trabajador> empleadosPorEmpresa(String empresa);
}
