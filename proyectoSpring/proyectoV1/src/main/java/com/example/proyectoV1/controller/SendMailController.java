package com.example.proyectoV1.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.proyectoV1.services.ReclamoSugerenciaService;
import com.example.proyectoV1.services.ReclamoSugerenciaServiceImp;
import com.example.proyectoV1.services.SendMailService;
import com.example.proyectoV1.services.UsuarioService;
@CrossOrigin(origins="http://localhost:4200",maxAge=3600)
@RestController
@RequestMapping({"/Email"})
@EnableAutoConfiguration
@Controller
public class SendMailController {
	@Autowired
	SendMailService sendMailService;
	@Autowired
	ReclamoSugerenciaServiceImp serviceRs;	
	@Autowired
	UsuarioService service;
	@Autowired
	ControladorUsuario user;
	@Autowired
	ReclamoSugerenciaService servicioRS;

 
	@GetMapping("/sendMail/mail")
	 public String index() {
		return "send_mail_view";
	}
	
	@RequestMapping (value="/{usuarioReclamoSugerencia}", method=RequestMethod.GET)
	public void sendMail(@PathVariable ("usuarioReclamoSugerencia")int usuarioReclamoSugerencia ) {
		System.out.println(usuarioReclamoSugerencia);
		user = new ControladorUsuario();
		String nombreUsuario =  service.listarId_RutUsuario(usuarioReclamoSugerencia).getNombreUsuario();
		String emailUsuario = service.listarId_RutUsuario(usuarioReclamoSugerencia).getEmailUsuario();
		int iDRS = servicioRS.rsByIdUser(usuarioReclamoSugerencia).getIdReclamoSugerencia();
		String message =
		"Estimad@ " + nombreUsuario + " : \n\n" + 
		
		"Tu reclamo o sugerencia ha sido ingresado con exito en nuestra plataforma! \n\n" +
		
		"Estate atento a la respuesta de tu reclamo o sugerencia con el numero de ID: " + iDRS + 
		"\n\n\nGracias por utilizar nuestra plataforma!\n\nVisitanos en www.g3.com  \n\n"
		+ "Cordiales saludos del equipo G3";
		sendMailService.sendMail(emailUsuario,"Reclamo ID: " + iDRS , message);
		System.out.println(message);
		 
	}
}
