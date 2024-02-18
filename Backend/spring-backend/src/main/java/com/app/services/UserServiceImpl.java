package com.app.services;

import java.util.List;

import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.dto.SignUpDTO;
import com.app.dto.UserRespDto;
import com.app.entities.UserEntity;
import com.app.entities.UserRole;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao dao;
	@Autowired
	ModelMapper mapper;
	
	@Override
	public List<UserRespDto> getAll() {	
		return dao.findAll().stream().map(u->mapper.map(u, UserRespDto.class)).collect(Collectors.toList());
	}

	@Override
	public UserRespDto getById(Long id) {
		
		UserEntity user = dao.findById(id).get();
		
		return mapper.map(user, UserRespDto.class); 	
	}


	@Override
	public void deleteUser(Long id) {
		
		if(dao.existsById(id)) {
			dao.deleteById(id);
		}
	}


	@Override
	public UserRespDto insertUser(SignUpDTO user) {
		UserEntity u = mapper.map(user, UserEntity.class);
		u.setRole(UserRole.USER);
		dao.save(u);
		return mapper.map(u, UserRespDto.class);
	}

	@Override
	public UserRespDto updateUser(SignUpDTO user,Long id) {
		UserEntity usr = dao.findById(id).get();
		if(usr !=null) {
		UserEntity modUser = mapper.map(user, UserEntity.class);
			usr.setName(modUser.getName());
			usr.setMobileNo(modUser.getMobileNo());
			usr.setPassword(modUser.getPassword());
			dao.save(usr);
		}
		
		return mapper.map(usr,UserRespDto.class);
	}

}
