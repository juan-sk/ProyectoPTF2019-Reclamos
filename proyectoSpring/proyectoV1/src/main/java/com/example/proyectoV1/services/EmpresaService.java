package com.example.proyectoV1.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.proyectoV1.entities.Empresa;
import com.example.proyectoV1.repositories.EmpresaRepositorio;
@Service
public class EmpresaService {

	@Autowired
	private EmpresaRepositorio repositorio;
	
	public Empresa add(Empresa e) {
		return repositorio.save(e);
	}
}
