package com.example.proyectoV1.services;
import java.util.List;

import com.example.proyectoV1.entities.Usuario;

public interface UsuarioService {
	List<Usuario>listar();
	Usuario listarId_RutUsuario(int rutusuario);
	Usuario add(Usuario p);
	Usuario edit(Usuario p);
	Usuario delete(Usuario p);
	boolean logIn(Usuario p);
	
}