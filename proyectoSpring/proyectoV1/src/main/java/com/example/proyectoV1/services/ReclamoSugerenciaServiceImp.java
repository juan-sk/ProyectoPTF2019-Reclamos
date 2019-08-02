package com.example.proyectoV1.services;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.ReclamoSugerencia;
import com.example.proyectoV1.repositories.ReclamoSugerenciaRepositorio;
@Service
public  class ReclamoSugerenciaServiceImp implements ReclamoSugerenciaService{
	
	@Autowired
	private ReclamoSugerenciaRepositorio repositorio;
	//add: ReclamoSugerencia -> ReclamoSugerencia
	//recibe un ReclamoSugerencia y lo guarda en la DB, devuelve el ReclamoSugerencia
	//Ej: add(ReclamoSugerencia x) devuelve ReclamoSugerencia
	@Override
	public ReclamoSugerencia add(ReclamoSugerencia r) {
		return repositorio.save(r);
	}
	//listarIdReclamoSugerencia: int -> ReclamoSugerencia
	//encuentra un ReclamoSugerencia por su id, devuelve el ReclamoSugerencia
	//Ej: listarIdReclamoSugerencia(int id) devuelve ReclamoSugerencia
	@Override
	public ReclamoSugerencia listarIdReclamoSugerencia(int idReclamoSugerencia) {
		return repositorio.findOne(idReclamoSugerencia);
	}
	//edit: ReclamoSugerencia -> ReclamoSugerencia
	//recibe un ReclamoSugerencia y lo edita, devuelve ReclamoSugerencia
	//Ej: edit(ReclamoSugerencia x) devuelve ReclamoSugerencia
	@Override
	public ReclamoSugerencia edit(ReclamoSugerencia x) {
		return repositorio.save(x);
	}
	//rsByusuarioReclamoSugerencia: int -> List<ReclamoSugerencia>
	//recibe un id de ReclamoSugerencia, lo busca y lo devuelve
	//Ej: rsByusuarioReclamoSugerencia(int id) devuelve ReclamoSugerencia
	@Override
	public List<ReclamoSugerencia> rsByusuarioReclamoSugerencia(int usuarioReclamoSugerencia) {
		return repositorio.findByUsuarioReclamoSugerencia(usuarioReclamoSugerencia);
	}
	//rsByIdUser: int -> ReclamoSugerencia
	//recibe un rut de usuario, devuelve el ultimo ReclamoSugerencia del usuario
	//Ej: rsByIdUser(int rut) devuelve ReclamoSugerencia
	@Override
	public ReclamoSugerencia rsByIdUser(int idUser) {
		ArrayList<ReclamoSugerencia> rsUser = (ArrayList<ReclamoSugerencia>) this.rsByusuarioReclamoSugerencia(idUser);
		ReclamoSugerencia xd = new ReclamoSugerencia();
		xd.setIdReclamoSugerencia(rsUser.get(rsUser.size()-1).getIdReclamoSugerencia());
		return xd;
	}
	//listarTodo: void -> List<ReclamoSugerencia>
	//devuelve un List de todos los ReclamoSugerencia
	//Ej: listarTodo() devuelve List<ReclamoSugerencia>
	@Override
	public List<ReclamoSugerencia> listarTodo() {
		return repositorio.findAll();
	}
	//listarByidEmpresa: int -> List<ReclamoSugerencia>
	//recibe un id de empresa, devuelve una lista de los ReclamoSugerencia de una Empresa
	//Ej: listarByidEmpresa(int id) devuelve List<ReclamoSugerencia>
	@Override
	public List<ReclamoSugerencia> listarByidEmpresa(int idEmpresa) {
		return repositorio.findByidEmpresa(idEmpresa);
	}
	//tipoByIdEmpresas: int, String -> List<ReclamoSugerencia>
	//recibe un id de empresa y un tipo de ReclamoSugerencia, devuelve una lista de
	//todas las Sugerencias o de todos los Reclamos de una empresa
	//Ej: tipoByIdEmpresas(int id, String tipo) devuelve List<ReclamoSugerencia>
	@Override
	public List<ReclamoSugerencia> tipoByIdEmpresas(int idEmpresa, String tipo) {
		return repositorio.findByIdEmpresaAndTipo(idEmpresa, tipo);
	}
	
	
}
