package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.UserEntity;

public interface UserDao extends JpaRepository<UserEntity, Long>{

	UserEntity findByEmail(String hostEmail);}
