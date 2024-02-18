package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.EventCategory;
import com.app.entities.EventEntity;

public interface EventsDao extends JpaRepository<EventEntity, Long>{

	List<EventEntity>findByCategory(EventCategory category);

}
