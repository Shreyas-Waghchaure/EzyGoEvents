package com.app.dto;
import javax.validation.constraints.Email;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDTO 
{
	@Email(message = "Invalid email format !!!!")
	private String email;
	private String password;
}
