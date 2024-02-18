package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.app.entities.EventCategory;
import com.app.entities.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EventsRespDTO {
	
	private Long id;
	
	private String eventName;

	private String venue; // Check for repetitions (Venue vs location)
	
	private String city;

	private LocalDate eventDate;
	
	private LocalTime time;

	private double price;

	private String description;

	private Status status;

	private EventCategory category;
}
