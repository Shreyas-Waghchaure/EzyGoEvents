package com.app.dto;

import com.app.entities.UserRole;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class UserRespDto {
	
	private String name;
	private String mobileNo;
	private String email;
	private UserRole role;
}
