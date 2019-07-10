
package com.example.proyectoV1.repositories;

import org.springframework.data.repository.Repository;

import com.example.proyectoV1.entities.Usuario;

import java.util.List;
public interface UsuarioRepositorio  extends Repository<Usuario,Integer>{
	List<Usuario>findAll();
	Usuario save(Usuario p);
	void delete(Usuario p);
	Usuario findOne(int id_rutUsuario);
	Usuario findByEmailusuario(String emailusuario);
}
