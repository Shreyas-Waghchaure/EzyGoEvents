package com.app.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.EventCreationDTO;
import com.app.dto.EventsRespDTO;
import com.app.services.EventService;
import com.app.services.ImageHandlingService;

@RestController
public class EventsController {

	@Autowired
	EventService eSvc;
	
	@Autowired
	private ImageHandlingService imgService;
	
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
	
	@DeleteMapping("/events/{id}")
	public void DeleteEvent(@PathVariable Long id){
		eSvc.deleteEvent(id);
	}
	
	@PostMapping("/events/add")
	public String addEvent(@RequestBody EventCreationDTO newEvent){
		
		try {
			eSvc.addEvent(newEvent);
			return "Evenet Creation Successfull";
		}catch(Exception e) {
			e.printStackTrace();
		}
		return "User Creation failed";		
	}
	
	@PostMapping(value = "/images/{eventId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable Long eventId, @RequestParam MultipartFile imageFile) throws IOException
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(imgService.uploadImage(eventId, imageFile));
	}
}
