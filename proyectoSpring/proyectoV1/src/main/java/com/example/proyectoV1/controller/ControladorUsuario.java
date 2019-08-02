package com.example.proyectoV1.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyectoV1.entities.Usuario;
import com.example.proyectoV1.exceptions.LoginException;
import com.example.proyectoV1.services.UsuarioService;
@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Usuario"})
@EnableAutoConfiguration
public class ControladorUsuario {	
	@Autowired
	UsuarioService service;
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//agregar: Usuario -> Usuario
	//recive un usuario tipo Usuario, lo guarda en la DB y devuelve el usuario.
	//Ej: agregar(Usuario x) devuelve (Usuario x)
	@PostMapping
	public Usuario agregar(@RequestBody Usuario p) {
		return service.add(p);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	//editarUsuario: Usuario -> String
	//recive un usuario de tipo Usuario y lo sobre escribe para editarlo, devuelve un mensaje tipo String
	//para validar
	//Ej: editarUsuario(Usuario x) devuelve "Usuario Editado"
	@RequestMapping(value = "/editar", method = RequestMethod.POST)
	public String editarUsuario (@RequestBody Usuario x) {
		service.add(x);  
		return "Usuario Editado";
	} 
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	//deleteUser: int -> String
	//recive un rut de usuario de tipo int, busca un Usuario por ese rut y lo elimina. Retorna un mensaje
	//de tipo String para validar que se elimino.
	//Ej: deleteUser(int rut) devuelve "Usuario Eliminado"
	@RequestMapping(value = "/delete/{rutUsuario}", method=RequestMethod.GET)
	public String deleteUser(@PathVariable ("rutUsuario") int rutUsuario) {
		service.delete(service.listarId_RutUsuario(rutUsuario));
		return "Usuario Eliminado";
	} 
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Listar: void -> List<Usuario>
	//Devuelve una lista de todos los usuarios
	//Ej: Listar() devuelve List<Usuario>
	@RequestMapping(value="/all", method = RequestMethod.GET)
	public List<Usuario>Listar(){
	return service.listar(); 
	}
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//buscarRutUsuario: int -> Usuario
	//recive un rut de usuario de tipo int, busca un usuario por ese rut y lo devuelve.
	//Ej: buscarRutUsuario(int rut) devuelve Usuario
	@RequestMapping(value="/{rutUsuario}", method=RequestMethod.GET)
	public Usuario buscarRutUsuario(@PathVariable("rutUsuario")int rutusuario) {
		return service.listarId_RutUsuario(rutusuario);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//logIn: Usuario -> ResponseEntity<Usuario>
	//revice un usuario y compara su email y su contraseña con la DB, si es valido, realiza el log in
	//Ej: logIn(Usuario x) devuelve ResponseEntity<Usuario>
	@PostMapping (path= {"/login"})
	public ResponseEntity<Usuario> logIn(@RequestBody Usuario p){
		 try {
			Usuario us = service.logIn(p);
			return ResponseEntity.status(HttpStatus.OK).body(us);
		} catch (LoginException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}
}
