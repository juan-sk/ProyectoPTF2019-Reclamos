package com.example.proyectoV1.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendMailService {

	
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	public void sendMail(String to, String subjet, String body) {
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setFrom("soporte@3chile.com");
		mailMessage.setTo(to);
		mailMessage.setSubject(subjet);
		mailMessage.setText(body);
	
		javaMailSender.send(mailMessage);
	}
}
