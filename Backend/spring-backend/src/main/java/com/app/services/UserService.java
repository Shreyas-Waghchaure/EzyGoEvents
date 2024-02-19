package com.app.services;

import java.util.List;


import com.app.dto.SignUpDTO;


import com.app.dto.LoginDTO;

import com.app.dto.UserRespDto;

public interface UserService {
	
	public List<UserRespDto> getAll();
	
	public UserRespDto getById(Long id);
	
	public UserRespDto insertUser(SignUpDTO user);
	
	public void deleteUser(Long id);

	public UserRespDto updateUser(SignUpDTO user,Long id);

	UserRespDto authenticateUser(LoginDTO request);	

}
