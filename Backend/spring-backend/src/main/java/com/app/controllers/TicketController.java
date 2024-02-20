package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.TicketDTO;
import com.app.services.TicketService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TicketController 
{
	@Autowired
	private TicketService tSvc;
	
	public void saveDetails(@RequestBody TicketDTO dto)
	{
		tSvc.saveDetails(dto);
	}
}
