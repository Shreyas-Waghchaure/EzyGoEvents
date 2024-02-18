package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.TicketEntity;

public interface TicketDao extends JpaRepository<TicketEntity, Long>{

} 
