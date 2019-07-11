package com.example.proyectoV1.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import com.example.proyectoV1.entities.Usuario;
import com.example.proyectoV1.repositories.UsuarioRepositorio;

@Service
public class UsuarioServiceImp  implements UsuarioService{
	
	@Autowired
	private UsuarioRepositorio repositorio;
	
	@Override
	public List<Usuario> listar() {
		return repositorio.findAll();	
	}

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

	@SuppressWarnings("null")
	@Override
	public ResponseEntity<Usuario> logIn(Usuario p){
		Usuario usuarioAVerificar=p;
		
		try { 
			String emailusuario = p.getEmailUsuario();
			String pass = p.getPassUsuario();
			usuarioAVerificar = repositorio.findByEmailUsuario(emailusuario);
			if(usuarioAVerificar==null) {
				usuarioAVerificar.setPassUsuario("error");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(usuarioAVerificar);
			}
			if((pass.equals(usuarioAVerificar.getPassUsuario())) == true){
			usuarioAVerificar.setPassUsuario("valido");
			
			}else {
				usuarioAVerificar.setPassUsuario("no valido");
			}
			
			
			return ResponseEntity.status(HttpStatus.OK).body(usuarioAVerificar);
			
		}catch(NullPointerException ex) {
			usuarioAVerificar.setPassUsuario("error");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(usuarioAVerificar);
		}catch(Exception e) {
			usuarioAVerificar.setPassUsuario("error");
		
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(usuarioAVerificar);
		}
		
	}

}
