package com.example.proyectoV1.controller;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.proyectoV1.entities.ReclamoSugerencia;
import com.example.proyectoV1.services.ReclamoSugerenciaService;
@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/ReclamoSugerencia"})
@EnableAutoConfiguration
public class ReclamoSugerenciaControlador { 
	@Autowired
	ReclamoSugerenciaService service;
	////////////////////////////////////////////////////////////////////////////////////////////////////
	//agregar: ReclamoSugerencia -> ReclamoSugerencia
	//recibe un ReclamoSugerencia y lo guarda en la DB, retorna el ReclamoSugerencia
	//Ej: agregr(ReclamoSugerencia x) devuelve ReclamoSugerencia x
	@PostMapping
	public ReclamoSugerencia agregar(@RequestBody ReclamoSugerencia r) {
		return service.add(r);
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//listarId: int -> ReclamoSugerencia
	//Recibe un id de tipo int, busca el reclamoSugerencia por id y lo retorna.
	//Ej: listarId(int id) devuelve ReclamoSugerencia
	@RequestMapping(value="/{idReclamo}", method=RequestMethod.GET)
	public ReclamoSugerencia listarId(@PathVariable("idReclamo")int rutusuario) {
		System.out.println("dentro de editar");
		return service.listarIdReclamoSugerencia(rutusuario);
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//responderRS: ReclamoSugerencia -> ReclamoSugerencia
	//Recibe un ReclamoSugerencia que tiene datos en el atributo respuesta y lo sobreescribe en la DB, retorna el mismo ReclmoSugerencia
	//Ej: respoderRS(ReclamoSugerencia x) retorna ReclamoSugerencia x
	@RequestMapping(value = "/responder", method = RequestMethod.POST)
	public ReclamoSugerencia responderRS(@RequestBody ReclamoSugerencia x) {
		return service.add(x);
	}
	////////////////////////////////////////////////////////////////////////////////////////////////
	//rsByUser: int -> ReclamoSugerencia
	//busca el ultimo ReclamoSugerencia de un usuario por su Rut, retorna un ReclamoSugerencia. 
	//Ej: rsByUser(int rut) devuelve ReclamoSugerencia
	@RequestMapping(value = "/id/{usuarioReclamoSugerencia}",method = RequestMethod.GET)
	public ReclamoSugerencia rsByUser (@PathVariable("usuarioReclamoSugerencia")int usuarioReclamoSugerencia) {
		ArrayList<ReclamoSugerencia> rsUser = (ArrayList<ReclamoSugerencia>) service.rsByusuarioReclamoSugerencia(usuarioReclamoSugerencia);
		ReclamoSugerencia xd = new ReclamoSugerencia();
		xd.setIdReclamoSugerencia(rsUser.get(rsUser.size()-1).getIdReclamoSugerencia());
		return xd;
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//lastRS: void -> ReclamoSugerencia
	//Retorna un ReclamoSugerencia con el ultimo id registrado en la DB
	//Ej: lastRS() devuelve ReclamoSugerencia
	@RequestMapping(value = "/id/last", method = RequestMethod.GET)
	public ReclamoSugerencia lastRS() {
		ArrayList<ReclamoSugerencia> ReclamosS = (ArrayList<ReclamoSugerencia>) service.listarTodo();
		ReclamoSugerencia lastidrs = new ReclamoSugerencia();
		lastidrs.setIdReclamoSugerencia(ReclamosS.get(ReclamosS.size()-1).getIdReclamoSugerencia());
		return lastidrs;
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//rsByIdEmpresas: int -> ArrayList<ReclamoSugerencia>
	//Recibe un id de empresa y devuelve una lista de los ReclamoSugerencia de esa Empresa
	//Ej: rsByIdEmpresa(int rutEmpresa) devuelve ArrayList>ReclamoSugerencia>
	@RequestMapping(value="/listar/rs/{idEmpresa}" , method = RequestMethod.GET)
	public ArrayList<ReclamoSugerencia> rsByIdEmpresas(@PathVariable("idEmpresa") int idEmpresa){
		ArrayList<ReclamoSugerencia> listaRSByidEmpresa = (ArrayList<ReclamoSugerencia>) service.listarByidEmpresa(idEmpresa);
		return listaRSByidEmpresa;
	}
	////////////////////////////////////////////////////////////////////////////////////////////////
	//rsByUsuario: int -> ArrayList<ReclamoSugerencia>
	//Recibe un rut de Usuario y devuelve una lista de los ReclamoSugerencia de ese Usuario
	//Ej: rsByUsuario(int rutUsuario) devuelve ArrayList>ReclamoSugerencia>
	@RequestMapping(value = "/listar/{usuarioReclamoSugerencia}", method = RequestMethod.GET)
	public ArrayList<ReclamoSugerencia> rsByUsuario(@PathVariable("usuarioReclamoSugerencia")int usuarioReclamoSugerencia){
		ArrayList<ReclamoSugerencia> listaRSUsuario = (ArrayList<ReclamoSugerencia>) service.rsByusuarioReclamoSugerencia(usuarioReclamoSugerencia);
		return listaRSUsuario;
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//sByEmpresa: int -> ArrayList<ReclamoSugerencia>
	//Recibe un rut de Empresa y devuelve una lista de las Sugerencias de esa Empresa
	//Ej: sByEmpresa(int rutEmpresa) devuelve ArrayList>ReclamoSugerencia>
	@RequestMapping(value = "/listar/s/{idEmpresa}",method = RequestMethod.GET)
	public ArrayList<ReclamoSugerencia> sugerenciaByIdEmpresa(@PathVariable ("idEmpresa") int idEmpresa){
		String tipo = "sugerencia";
		ArrayList<ReclamoSugerencia> sByEmpresa = (ArrayList<ReclamoSugerencia>) service.tipoByIdEmpresas(idEmpresa, tipo);
		return sByEmpresa;	
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//rByEmpresa: int -> ArrayList<ReclamoSugerencia>
	//Recibe un rut de Empresa y devuelve una lista de los Reclamos de esa Empresa
	//Ej: rByEmpresa(int rutEmpresa) devuelve ArrayList>ReclamoSugerencia>
	@RequestMapping(value = "/listar/r/{idEmpresa}", method = RequestMethod.GET)
	public ArrayList<ReclamoSugerencia> reclamoByIdEmpresa(@PathVariable ("idEmpresa") int idEmpresa){
		String tipo = "reclamo";
		ArrayList<ReclamoSugerencia> rByEmpresa = (ArrayList<ReclamoSugerencia>) service.tipoByIdEmpresas(idEmpresa, tipo);
		return rByEmpresa;
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//cantRSByEmpresa: int -> int[]
	//recibe un rut de empresa de tipo int y devuelve un arreglo de int donde la posicion 0 indicara la cantidad
	//de sugerencias de la empresa buscada por el rut, y la posicion 1 indica la cantidad de reclamos de la misma
	//Ej: cantRSByEmpresa(int rut) devuelve int[]
	@RequestMapping(value = "/Estadistica/{idEmpresa}", method = RequestMethod.GET)
	public int[] cantRSByIdEmpresa(@PathVariable ("idEmpresa")int idEmpresa) {
		int [] estadisticas = new int[2];
		estadisticas[0] =service.tipoByIdEmpresas(idEmpresa, "sugerencia").size();
		estadisticas[1] = service.tipoByIdEmpresas(idEmpresa, "reclamo").size();
		return estadisticas;
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////
	//setearTrabajador: int, ReclamoSugerencia -> ReclamoSugerencia
	//recibe un rut de trabajador, y lo agrega al ReclamoSugerencia que recibe. Retorna el ReclamoSugerencia
	//Ej: setearTrabajador(ReclamoSugerencia x, int rutTrabajador) retorna ReclamoSugerencia x
	@RequestMapping(value = "/setTrabajador/{idTrabajador}", method = RequestMethod.POST)
	public ReclamoSugerencia setearTrabajador(@RequestBody ReclamoSugerencia x, @PathVariable("idTrabajador") int idTrabajador) {
		x.setIdEmpleado(idTrabajador);
		return service.add(x); 
	}
	
}























