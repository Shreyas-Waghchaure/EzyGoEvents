package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.dto.UserReqDto;
import com.app.dto.UserRespDto;
import com.app.entities.UserEntity;

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
	public UserRespDto insertUser(UserReqDto user) {
		UserEntity u = mapper.map(user, UserEntity.class);
		dao.save(u);
		return mapper.map(u, UserRespDto.class);
	}

	@Override
	public void deleteUser(Long id) {
		
		if(dao.existsById(id)) {
			dao.deleteById(id);
		}
	}

	@Override
	public UserRespDto updateUser(UserReqDto user) {
		
		UserEntity usr = dao.findById(user.getId()).get();
		if(usr !=null) {
		UserEntity modUser = mapper.map(user, UserEntity.class);
			usr.setName(modUser.getName());
			usr.setMobileNo(modUser.getMobileNo());
			usr.setPassword(modUser.getMobileNo());
			dao.save(usr);
		}
		
		return mapper.map(usr,UserRespDto.class);
	}

}
