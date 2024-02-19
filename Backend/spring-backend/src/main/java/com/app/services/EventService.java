package com.app.services;

import java.util.List;

import com.app.dto.EventsRespDTO;
import com.app.dto.LoginDTO;
import com.app.dto.UserRespDto;

public interface EventService {
	
	public List<EventsRespDTO> getAll();

	public List<EventsRespDTO> getByCategory(String cat);

	public EventsRespDTO getById(Long id);
}
