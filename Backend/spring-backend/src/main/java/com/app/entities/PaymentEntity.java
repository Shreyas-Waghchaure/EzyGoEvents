package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "payment")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PaymentEntity extends BaseEntity 
{
	@NotNull(message = "Please provide amount")
	private double amount;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Mode mode;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "ticket_id")
	private TicketEntity ticket;
}
