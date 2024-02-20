package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	private PaymentMode mode;
	
	@Column(nullable = false)
	private String transactionId;
	
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private PaymentStatus status;
	
	@OneToOne
	@JoinColumn(name = "ticket_id", nullable = false)
	private TicketEntity ticket;
}
