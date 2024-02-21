package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;

import com.app.entities.EventCategory;
import com.app.entities.*;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EventsRespDTO {
	
	private Long id;
	
	private String eventName;

	private String venue;
	
	private String city;

	private LocalDate eventDate;
	
	private LocalTime time;

	private double price;

	private String description;

	private EventStatus status;
	
	private String hostEmail;
	
	private String imagePath;
	
	private int noOfSeats;
	
	private EventCategory category;
}
