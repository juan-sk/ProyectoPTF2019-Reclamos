package com.example.proyectoV1.repositories;
import java.util.List;
import org.springframework.data.repository.Repository;
import com.example.proyectoV1.entities.ReclamoSugerencia;
public interface ReclamoSugerenciaRepositorio extends Repository<ReclamoSugerencia,Integer>{
	//save: ReclamoSugerencia -> ReclamoSugerencia
	//Recibe un ReclamoSugerencia y lo guarda en la DB, retorna el ReclamoSugerencia
	//Ej: save(ReclamoSugerencia x) devuelve ReclamoSugerencia x
	ReclamoSugerencia save (ReclamoSugerencia r);
	//findOne: int -> ReclamoSugerencia
	//recibe un id de ReclamoSugerencia de tipo int, retorna el ReclamoSugerencia de ese id
	//Ej: findOne(int id) retorna reclamoSugerencia
	ReclamoSugerencia findOne(int idReclamoSugerencia);
	//findByUsuarioReclamoSugerencia: int -> List<eclamoSugerencia>
	//recibe un rut de usuario, devuelve un List de todos los ReclamoSugerencia del Usuario
	//Ej: findByUsuarioReclamoSugerencia(int rut) devuelve List<ReclamoSugerencia>
	List<ReclamoSugerencia> findByUsuarioReclamoSugerencia(int usuarioReclamoSugerencia);
	//findAll: void -> List<ReclamoSugerencia>
	//devuelve una lista de todos los ReclamoSugerencia de la DB
	//Ej: findAll() devuelve List<ReclamoSugerencia>  
	List<ReclamoSugerencia> findAll();
	//findByidEmpresa: int ->  List<ReclamoSugerencia>
	//recibe un rut de empresa de tipo int, devuelve un List de todos los ReclamoSugerencia de la empresa
	//Ej: findByidEmpresa(int rut) devuelve  List<ReclamoSugerencia>
	List<ReclamoSugerencia> findByidEmpresa(int idEmpresa);
	//findByIdEmpresaAndTipo: int, String -> List<ReclamoSugerencia>
	//recibe un rut de empresa y un tipo de ReclamoSugerencia (reclamo o sugerencia) de tipo String, devuelve
	//un List con los reclamos o sugerencias de la empresa
	//Ej:findByIdEmpresaAndTipo(int rut, String tipo) devuelve  List<ReclamoSugerencia>
	List<ReclamoSugerencia> findByIdEmpresaAndTipo(int idEmpresa, String tipo);
}
