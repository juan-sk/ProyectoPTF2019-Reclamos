package com.example.proyectoV1.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.proyectoV1.entities.Usuario;
import com.example.proyectoV1.repositories.UsuarioRepositorio;

@Service
public class UsuarioServiceImp  implements UsuarioService{
	@Autowired
	private UsuarioRepositorio repositorio;
	@Override
	public List<Usuario> listar() {
		return repositorio.findAll()
;	}

	@Override
	public Usuario listarId_RutUsuario(int id_rutUsuario) {
		return repositorio.findOne(id_rutUsuario);
	}

	@Override
	public Usuario add(Usuario p) {
		
		return repositorio.save(p);
	}

	@Override
	public Usuario edit(Usuario p) {
		return repositorio.save(p);
	}

	@Override
	public Usuario delete(Usuario p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean logIn(Usuario p) {
		
		boolean verificador= false;
		String emailusuario = p.getEmailusuario();
		String pass = p.getPassusuario();
		Usuario usuarioAVerificar = repositorio.findByCorreo(emailusuario);
		
		if(emailusuario.equals(usuarioAVerificar.getEmailusuario()) && pass.equals(usuarioAVerificar.getPassusuario())) {
			verificador = true;
		}
		
		return verificador;
	}



}
