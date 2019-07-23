package com.example.proyectoV1.repositories;
import java.util.List;
import org.springframework.data.repository.Repository;
import com.example.proyectoV1.entities.ReclamoSugerencia;
public interface ReclamoSugerenciaRepositorio extends Repository<ReclamoSugerencia,Integer>{
	ReclamoSugerencia save (ReclamoSugerencia r);
	ReclamoSugerencia findOne(int idReclamoSugerencia);
	List<ReclamoSugerencia> findByUsuarioReclamoSugerencia(int usuarioReclamoSugerencia);
	List<ReclamoSugerencia> findAll();
	List<ReclamoSugerencia> findByidEmpresa(int idEmpresa);
	List<ReclamoSugerencia> findByIdEmpresaAndTipo(int idEmpresa, String tipo);
}
