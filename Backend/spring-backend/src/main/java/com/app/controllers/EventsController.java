package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EventsRespDTO;
import com.app.services.EventService;

@RestController
public class EventsController {

	@Autowired
	EventService eSvc;
	
	public EventsController() {
		System.out.println("In events Controller");
	}
	
	@GetMapping("/events")
	public List<EventsRespDTO> getAll(){
		return eSvc.getAll();
	}
	
	@GetMapping("/events/category/{cat}")
	public List<EventsRespDTO> getByCategory(@PathVariable String cat){
		return eSvc.getByCategory(cat.toUpperCase());
	}
	
	
	@GetMapping("/events/{id}")
	public EventsRespDTO getById(@PathVariable Long id) {
		return eSvc.getById(id);
	}
	
//	@DeleteMapping("/events/{id}"){
//		
//	}
	
}
