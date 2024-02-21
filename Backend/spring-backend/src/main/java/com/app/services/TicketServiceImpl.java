package com.app.services;

import java.util.Random;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.EventsDao;
import com.app.dao.TicketDao;
import com.app.dao.UserDao;
import com.app.dto.TicketDTO;
import com.app.entities.EventEntity;
import com.app.entities.TicketEntity;
import com.app.entities.UserEntity;

@Service
@Transactional
public class TicketServiceImpl implements TicketService 
{	
	@Autowired
	private EventsDao eDao;
	
	@Autowired
	private UserDao uDao;
	
	@Autowired
	private TicketDao tDao;
	
	@Override
	public void saveDetails(TicketDTO dto) 
	{
		TicketEntity ticket = new TicketEntity();
		ticket.setPrice(dto.getEventPrice());
		EventEntity event =  eDao.findById(dto.getEventId()).orElseThrow(() -> new ResourceNotFoundException("Invalid id !"));
		ticket.setEvent(event);
		UserEntity user = uDao.findById(dto.getUserId()).orElseThrow(() -> new ResourceNotFoundException("Invalid id !"));
		ticket.setUser(user);
		Random random = new Random();
		String uniId = String.format("%04d%n", random.nextInt(10000));
		ticket.setUniqueId(uniId);
		tDao.save(ticket);		
	}	
}
