package com.app.dto;

import lombok.Setter;

import lombok.Getter;

@Getter
@Setter
public class TicketDTO 
{
	private Long userId;
	
	private Long eventId;
	
	private String eventName;
	
	private double eventPrice;
}
