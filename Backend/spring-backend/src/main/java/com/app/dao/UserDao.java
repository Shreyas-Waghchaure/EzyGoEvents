package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.UserEntity;
import com.app.entities.UserRole;


public interface UserDao extends JpaRepository<UserEntity, Long>{

	UserEntity findByEmail(String hostEmail);

	Optional<UserEntity> getByEmailAndPassword(String email, String password);

	List<UserEntity> findByRole(UserRole host);
}

