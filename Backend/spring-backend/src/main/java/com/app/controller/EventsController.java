package com.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class EventsController {

	public EventsController() {
		System.out.println("In Event Controller");
	}
	
	@GetMapping
	public String getAll() {
		return "Hello";
	}
}
