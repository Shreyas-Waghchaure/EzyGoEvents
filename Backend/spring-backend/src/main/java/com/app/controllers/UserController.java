package com.app.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginDTO;
import com.app.dto.SignUpDTO;
import com.app.dto.UserRespDto;
import com.app.services.UserService;

@RestController
public class UserController{
	
	public UserController() {
		System.out.println("inside user controller");
	}
	@Autowired
	UserService uSvc;
	@GetMapping("/users")
	public List<UserRespDto> getAll(){
		List <UserRespDto> users = uSvc.getAll();
		return users;
	}
	@GetMapping("/user/{id}")
	public UserRespDto getById(@PathVariable Long id) {
		return uSvc.getById(id);
	}
	
	@PostMapping("user/signup")
	public UserRespDto insertUser(@RequestBody SignUpDTO user) {
		return uSvc.insertUser(user);
	}
	
	@DeleteMapping("user/{id}")
	public void deleteUser(@PathVariable Long id) {
		uSvc.deleteUser(id);
	}
	@PutMapping("user/update/{id}")
	public UserRespDto updateUser(@RequestBody SignUpDTO user,@PathVariable Long id) {
		return uSvc.updateUser(user,id);
	}
	
	@PostMapping("user/signin")
	public UserRespDto authenticateUser(@RequestBody @Valid LoginDTO dto)
	{
		return uSvc.authenticateUser(dto);
	}
}
