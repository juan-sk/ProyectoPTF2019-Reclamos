package com.example.proyectoV1.repositories;
import org.springframework.data.repository.Repository;
import com.example.proyectoV1.entities.Empresa;

public interface EmpresaRepositorio extends Repository<Empresa,Integer>{
	Empresa save(Empresa e);
	Empresa findOne(int rutEmpresa);
}
