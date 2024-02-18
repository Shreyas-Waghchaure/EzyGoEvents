package com.app.services;

import java.util.List;

import com.app.dto.EventsRespDTO;

public interface EventService {
	
	public List<EventsRespDTO> getAll();

	public List<EventsRespDTO> getByCategory(String cat);

	public EventsRespDTO getById(Long id);
	
}
