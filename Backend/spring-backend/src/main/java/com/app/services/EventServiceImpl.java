package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.EventsDao;
import com.app.dao.UserDao;
import com.app.dto.EventCreationDTO;
import com.app.dto.EventsRespDTO;
import com.app.entities.EventCategory;
import com.app.entities.EventEntity;
import com.app.entities.Status;
import com.app.entities.UserEntity;

@Service
@Transactional
public class EventServiceImpl implements EventService{

	
	@Autowired
	EventsDao eDao;
	@Autowired
	UserDao uDao;
	@Autowired
	ModelMapper mapper;
	@Override
	public List<EventsRespDTO> getAll() {
		List<EventEntity>events = eDao.findAll();
		return events.stream().map(e->mapper.map(e, EventsRespDTO.class)).collect(Collectors.toList());
	}
	@Override
	public List<EventsRespDTO> getByCategory(String cat) {
		EventCategory category = EventCategory.valueOf(cat);
		List<EventEntity> eventList = eDao.findByCategory(category);
		return eventList.stream().map(e->mapper.map(e, EventsRespDTO.class)).collect(Collectors.toList());
	}
	@Override
	public EventsRespDTO getById(Long id) {
		EventEntity event = eDao.findById(id).get();
		return mapper.map(event, EventsRespDTO.class);
	}
	@Override
	public void deleteEvenet(Long id) {
		EventEntity event = eDao.findById(id).get();
		
		eDao.delete(event);
	}
	@Override
	public String addEvent(EventCreationDTO newEvent) {
	EventEntity event =mapper.map(newEvent,EventEntity.class);
	System.out.println(event);
	System.out.println(newEvent);
		event.setStatus(Status.PENDING);
		event.setCategory(EventCategory.valueOf(newEvent.getCategory().toUpperCase()));
		UserEntity host = uDao.findByEmail(event.getHostEmail());
		host.addEvent(event);
		eDao.save(event);
		return "Event send for verification";
		
	}

}
