package com.app.services;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;

public interface ImageHandlingService 
{
	ApiResponse uploadImage(Long eventId, MultipartFile image) throws IOException;
	
	public byte[] serveImage(Long eventId) throws IOException;
}
