package com.example.proyectoV1.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Usuario;
import com.example.proyectoV1.exceptions.LoginException;
import com.example.proyectoV1.repositories.UsuarioRepositorio;
@Service
public class UsuarioServiceImp  implements UsuarioService{
	@Autowired
	private UsuarioRepositorio repositorio;
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	//add: Usuario -> Usuario
	//recibe un usuario y lo almacena en la DB, devuelve Usuario
	//Ej: add(Usuario x) devuelve Usuario	@Override
	public Usuario add(Usuario p) {
		return repositorio.save(p);
	}
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
	//edit: Usuario -> Usuario
	//recibe un Usuario y lo edita en la DB, devuelve Usuario
	//Ej: edit(Usuario) devuelve Usuario	@Override
	public Usuario edit(Usuario p) {
		return repositorio.save(p);
	}
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
	//delete: Usuario -> void
	//recibe un usuario y lo elimina en la DB
	//Ej: delete(Usuario x)	@Override
	public void delete(Usuario p) {
		repositorio.delete(p);
	}
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
	//listar: void -> List<Usuario>
	//devuelve una lista de todos los usuarios de la DB
	//Ej: listar() devuelve List<Usuario>	@Override
	public List<Usuario> listar() {
		return repositorio.findAll();	
	}
	//listarId_RutUsuario: int -> Usuario
	//recibe un id de usuario de tipo int, busca el usuario y lo retorna
	//Ej: listarId_RutUsuario(int id) devuelve Usuario
	public Usuario listarId_RutUsuario(int id_rutUsuario) {
		return repositorio.findOne(id_rutUsuario);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//LogIn: Usuario -> Usuario
	//revibe un Usuario, lo compara con la DB, si coincide Devuelve un Usuario, si no,
	//lanza una excepcion.
	//Ej: logIn(Usuario x) devuelve Usuario	@Override
	public Usuario logIn(Usuario p) throws LoginException{
		Usuario usuarioAVerificar=p;
		String emailusuario = p.getEmailUsuario();
		String pass = p.getPassUsuario();
		usuarioAVerificar = repositorio.findByEmailUsuarioAndPassUsuario(emailusuario, pass);	
		if(usuarioAVerificar==null) {
			throw new LoginException();
		}	
		return usuarioAVerificar;
	}
}
