package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.PaymentEntity;

public interface PaymentDao extends JpaRepository<PaymentEntity, Long>{

}