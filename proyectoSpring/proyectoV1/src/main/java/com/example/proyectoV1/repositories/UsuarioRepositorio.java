package com.example.proyectoV1.repositories;
import org.springframework.data.repository.Repository;
import com.example.proyectoV1.entities.Usuario;
import java.util.List;
public interface UsuarioRepositorio  extends Repository<Usuario,Integer>{	
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	//save: Usuario -> Usuario
	//recibe un Usuario y lo guarda en la DB
	//Ej: save(Usuario x) devuelve Usuario
	Usuario save(Usuario p);
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	//delete: Usuario -> void
	//recibe un Usuario y lo elimina
	//Ej: delete(Usuario x)
	void delete(Usuario p);
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//findAll: void -> List<Usuario>
	//devuelve una List de todos los usuarios
	//Ej: findAll() devuelve List<Usuario>
	List<Usuario>findAll();
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//findOne: int -> Usuario
	//recibe un rut de usuario, lo encuentra y lo devuelve
	//findOne(int rut) devuelve Usuario
	Usuario findOne(int id_rutUsuario);
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//findByEmailUsuario: String -> Usuario
	//recibe un email de usuario, lo encuentra y lo devuelve
	//Ej: findByEmailUsuario(String email) devuelve Usuario
	Usuario findByEmailUsuario(String emailUsuario);
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//findByEmailUsuarioAndPassUsuario: String, String -> Usuario
	//encuentra un usuario por su email y su contraseña, devuelve usuario
	//Ej:findByEmailUsuarioAndPassUsuario(String email, String password) devuelve Usuario
	Usuario findByEmailUsuarioAndPassUsuario(String emailUsuario, String passUsuario);  
}   
  