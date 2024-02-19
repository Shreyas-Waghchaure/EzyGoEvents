package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = "password")
public class UserEntity extends BaseEntity 
{
	@Column(length = 20)
	private String name;
	
	@Column(length = 10)
	private String mobileNo;
	
	@Column(length = 30, unique = true)
	private String email;
	
	@Column(length = 50, nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private UserRole role;
	
	@OneToMany(mappedBy = "user",cascade=CascadeType.ALL,orphanRemoval = true)
	private List<EventEntity> events = new ArrayList<>();
	
	@OneToMany(mappedBy = "user",cascade=CascadeType.ALL,orphanRemoval = true)
	private List<TicketEntity> tickets = new ArrayList<>();
	
	public UserEntity(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	//Helper Methods
	public void addEvent(EventEntity e)
	{
		this.events.add(e);
		e.setUser(this);
	}
	
	public void removeEvent(EventEntity e)
	{
		this.events.remove(e);
		e.setUser(null);
	}
}
