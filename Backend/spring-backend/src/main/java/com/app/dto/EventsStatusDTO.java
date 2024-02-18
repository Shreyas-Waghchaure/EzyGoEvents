package com.app.dto;

import com.app.entities.Status;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class EventsStatusDTO {
	private Long id;
	private Status status;
}
