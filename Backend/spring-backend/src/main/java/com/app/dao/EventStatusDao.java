package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.EventStatus;

public interface EventStatusDao extends JpaRepository<EventStatus, Long>{

}
