package com.app.dto;

import com.app.entities.EventStatus;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class EventsStatusDTO {
	private Long id;
	private EventStatus status;
}
