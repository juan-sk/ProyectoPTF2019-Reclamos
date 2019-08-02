package com.example.proyectoV1.controller;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyectoV1.entities.Trabajador;
import com.example.proyectoV1.exceptions.LoginException;
import com.example.proyectoV1.services.EmpresaService;
import com.example.proyectoV1.services.TrabajadorService;

@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Trabajador"})
@EnableAutoConfiguration
public class TrabajadorControlador {
	@Autowired
	TrabajadorService service;
	@Autowired
	EmpresaService serviceE;
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//agregar: Trabajador -> Trabajador
	//recibe un trabajador y lo guarda en la DB, devuelve el Trabajador
	//Ej: agregar(Trabajador x) devuelve Trabajador x
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public Trabajador agregar(@RequestBody Trabajador t) {
		return service.add(t);
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//editarTrabajador: Trabajador -> String
	//recibe un trabajador editado y lo sobreescribe en la DB, retorna un mensaje de tipo String
	//Ej: editarTrabajador(Trabajador x) devuelve String "Trabajador Editado"
	@RequestMapping(value = "/editar", method = RequestMethod.POST)
	public String editarTrabajador(@RequestBody Trabajador x) {
		service.add(x);
		return "Trabajador Editado";
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//deleteTrabajador: int -> void
	//recibe un rut de tipo int, busca el trabajador por el rut y lo elimina.
	//Ej: deleteTrabajador(int rut) 
	@RequestMapping(value = "/delete/{idTrabajador}", method = RequestMethod.GET)
	public void deleteTrabajador(@PathVariable("idTrabajador") int idTrabajador) {
		service.delete(service.buscarUno(idTrabajador));
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//listar: void -> List<Trabajador>
	//Retorna una lista de todos los trabajadores de la DB
	//Ej: listar() retorna List<Trabajador>
	@GetMapping
	public List<Trabajador> listar(){
		return service.listar();
	} 
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//trabajadoresByEmpresa: int -> ArrayList<Trabajador>
	//recibe un rut de empresa de tipo int y devuelve un ArrayList de los trabajadores de esa empresa
	//Ej: trabajadoresByEmpresa(int rutEmpresa) devuelve ArrayList<Trabajador>
	@RequestMapping (value = "/{idEmpresa}", method=RequestMethod.GET)
	public ArrayList<Trabajador> trabajadoresByEmpresa(@PathVariable("idEmpresa")int idEmpresa){
		ArrayList<Trabajador> trabajadores = (ArrayList<Trabajador>) service.empleadosPorEmpresa(serviceE.idEmpresa(idEmpresa).getNombreEmpresa());
		return trabajadores;
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//logIn: Trabajador -> ResponseEntity<Trabajador>
	//recibe un Trabajador y compara su nombre, el nombre de la Empresa y su contraseña con la DB, si es valido, realiza el log in
	//Ej: logIn(Trabajador x) devuelve ResponseEntity<Trabajador>
	@PostMapping (path= {"/login"})
	public ResponseEntity<Trabajador> logIn(@RequestBody Trabajador t){
		 try {
			Trabajador trabajador = service.logIn(t);
			return ResponseEntity.status(HttpStatus.OK).body(trabajador);
		} catch (LoginException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}
	
}




















    