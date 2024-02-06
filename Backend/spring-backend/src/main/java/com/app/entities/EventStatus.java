package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
public class EventStatus extends BaseEntity 
{
	@Enumerated(EnumType.STRING) 
	private Status status;
}
