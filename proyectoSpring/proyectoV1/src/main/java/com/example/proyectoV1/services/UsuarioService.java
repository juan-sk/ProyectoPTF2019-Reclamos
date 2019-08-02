package com.example.proyectoV1.services;
import java.util.List;
import com.example.proyectoV1.entities.Usuario;
import com.example.proyectoV1.exceptions.LoginException;
public interface UsuarioService {
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//add: Usuario -> Usuario
	//recibe un usuario y lo almacena en la DB, devuelve Usuario
	//Ej: add(Usuario x) devuelve Usuario
	Usuario add(Usuario p);
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//edit: Usuario -> Usuario
	//recibe un Usuario y lo edita en la DB, devuelve Usuario
	//Ej: edit(Usuario) devuelve Usuario
	Usuario edit(Usuario p);
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//delete: Usuario -> void
	//recibe un usuario y lo elimina en la DB
	//Ej: delete(Usuario x)
	void delete(Usuario p);
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//listar: void -> List<Usuario>
	//devuelve una lista de todos los usuarios de la DB
	//Ej: listar() devuelve List<Usuario>
	List<Usuario>listar();
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//listarId_RutUsuario: int -> Usuario
	//recibe un id de usuario de tipo int, busca el usuario y lo retorna
	//Ej: listarId_RutUsuario(int id) devuelve Usuario
	Usuario listarId_RutUsuario(int rutUsuario);
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//LogIn: Usuario -> Usuario
	//revibe un Usuario, lo compara con la DB, si coincide Devuelve un Usuario, si no,
	//lanza una excepcion.
	//Ej: logIn(Usuario x) devuelve Usuario
	Usuario logIn(Usuario p) throws LoginException;
}   
  