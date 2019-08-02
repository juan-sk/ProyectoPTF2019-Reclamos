package com.example.proyectoV1.services;
import java.util.List;
import com.example.proyectoV1.entities.ReclamoSugerencia;
public interface ReclamoSugerenciaService {	
	//add: ReclamoSugerencia -> ReclamoSugerencia
	//recibe un ReclamoSugerencia y lo guarda en la DB, devuelve el ReclamoSugerencia
	//Ej: add(ReclamoSugerencia x) devuelve ReclamoSugerencia
	ReclamoSugerencia add(ReclamoSugerencia r);
	//listarIdReclamoSugerencia: int -> ReclamoSugerencia
	//encuentra un ReclamoSugerencia por su id, devuelve el ReclamoSugerencia
	//Ej: listarIdReclamoSugerencia(int id) devuelve ReclamoSugerencia
	ReclamoSugerencia listarIdReclamoSugerencia(int idReclamoSugerencia);
	//edit: ReclamoSugerencia -> ReclamoSugerencia
	//recibe un ReclamoSugerencia y lo edita, devuelve ReclamoSugerencia
	//Ej: edit(ReclamoSugerencia x) devuelve ReclamoSugerencia
	ReclamoSugerencia edit(ReclamoSugerencia x);
	//rsByusuarioReclamoSugerencia: int -> List<ReclamoSugerencia>
	//recibe un id de ReclamoSugerencia, lo busca y lo devuelve
	//Ej: rsByusuarioReclamoSugerencia(int id) devuelve ReclamoSugerencia
	List<ReclamoSugerencia> rsByusuarioReclamoSugerencia(int usuarioReclamoSugerencia);
	//rsByIdUser: int -> ReclamoSugerencia
	//recibe un rut de usuario, devuelve el ultimo ReclamoSugerencia del usuario
	//Ej: rsByIdUser(int rut) devuelve ReclamoSugerencia
	ReclamoSugerencia rsByIdUser(int idUser);
	//listarTodo: void -> List<ReclamoSugerencia>
	//devuelve un List de todos los ReclamoSugerencia
	//Ej: listarTodo() devuelve List<ReclamoSugerencia>
	List<ReclamoSugerencia> listarTodo();
	//listarByidEmpresa: int -> List<ReclamoSugerencia>
	//recibe un id de empresa, devuelve una lista de los ReclamoSugerencia de una Empresa
	//Ej: listarByidEmpresa(int id) devuelve List<ReclamoSugerencia>
	List<ReclamoSugerencia> listarByidEmpresa(int idEmpresa);
	//tipoByIdEmpresas: int, String -> List<ReclamoSugerencia>
	//recibe un id de empresa y un tipo de ReclamoSugerencia, devuelve una lista de
	//todas las Sugerencias o de todos los Reclamos de una empresa
	//Ej: tipoByIdEmpresas(int id, String tipo) devuelve List<ReclamoSugerencia>
	List<ReclamoSugerencia> tipoByIdEmpresas(int idEmpresa, String tipo);
}
