package com.example.proyectoV1.services;
import java.util.List;

import org.springframework.http.ResponseEntity;


import com.example.proyectoV1.entities.Usuario;

public interface UsuarioService {
	List<Usuario>listar();
	Usuario listarId_RutUsuario(int rutUsuario);
	Usuario add(Usuario p);
	Usuario edit(Usuario p);
	Usuario delete(Usuario p);
	/* boolean logIn(Usuario p); */
	ResponseEntity<Usuario> logIn(Usuario p);
	
}
  