package com.app.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "events")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class EventEntity extends BaseEntity 
{
	@Column(length = 50)
	private String eventName;
	
	@Column(length = 30)
	private String venue; // Check for repetitions (Venue vs location)
	
	@Column(length = 30)
	private String city;
	
	@NotNull(message = "Please provide a date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate eventDate;
	
	@NotNull(message = "Please provide a time")
	private LocalTime time;
	
	@Column(nullable = false)
	private double price;
	
	@Column(length = 100)
	private String description;
	
	@Column(name = "status")
	@Enumerated(EnumType.STRING)
	private EventStatus status;
	@Column(name="host_Email")
	private String hostEmail;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private EventCategory category;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	private UserEntity user;
	
	@OneToMany(mappedBy = "event",cascade=CascadeType.ALL,orphanRemoval = true)
	private List<TicketEntity> tickets = new ArrayList<>();
	
	
	
}
