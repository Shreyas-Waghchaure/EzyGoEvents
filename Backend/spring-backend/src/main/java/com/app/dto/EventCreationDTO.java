package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class EventCreationDTO {
	
	private String eventName;

	private String venue; // Check for repetitions (Venue vs location)
	
	private String city;

	private LocalDate eventDate;
	
	private LocalTime time;

	private double price;

	private String description;
	
	private String hostEmail;
	
	private String category;
	
}
