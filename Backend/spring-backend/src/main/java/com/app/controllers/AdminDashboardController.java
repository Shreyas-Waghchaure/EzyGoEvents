package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EventsRespDTO;
import com.app.dto.UserRespDto;
import com.app.services.EventService;
import com.app.services.UserService;

@RestController
@RequestMapping("/admin/dashboard")
public class AdminDashboardController {
	
	@Autowired
	EventService eSvc;
	@Autowired
	UserService uSvc;
	public AdminDashboardController() {
		System.out.println("in admin dashboard controller");
	}
	
	@GetMapping("/getAllHosts")
	public List<UserRespDto> getAllHosts(){
		return uSvc.getByRole();
	}
	
	@GetMapping("/getAllEvents")
	public List<EventsRespDTO> getAllEvents(){
		return eSvc.getAll();
	}
	
	@PutMapping("/updateStatus/{id}")
	public void updateStatus(@PathVariable Long id) {
		eSvc.updateStatus(id);
	}
}
