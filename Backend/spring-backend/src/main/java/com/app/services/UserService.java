package com.app.services;

import java.util.List;

import com.app.dto.LoginDTO;
import com.app.dto.UserReqDto;
import com.app.dto.UserRespDto;

public interface UserService {
	
	public List<UserRespDto> getAll();
	public UserRespDto getById(Long id);
	public UserRespDto insertUser(UserReqDto user);
	public void deleteUser(Long id);
	public UserRespDto updateUser(UserReqDto user);
	UserRespDto authenticateUser(LoginDTO request);	
}
