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
	//Agregar
	@Override
	public Usuario add(Usuario p) {
		return repositorio.save(p);
	}
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Editar
	@Override
	public Usuario edit(Usuario p) {
		return repositorio.save(p);
	}
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Eliminar
	@Override
	public void delete(Usuario p) {
		repositorio.delete(p);
	}
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Lista de Todos los Usuarios
	@Override
	public List<Usuario> listar() {
		return repositorio.findAll();	
	}
	//Buscar un Usuario por su Rut
	public Usuario listarId_RutUsuario(int id_rutUsuario) {
		return repositorio.findOne(id_rutUsuario);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////
	//LogIn Usuario
	@Override
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
