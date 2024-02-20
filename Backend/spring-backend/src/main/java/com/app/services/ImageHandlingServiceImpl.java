package com.app.services;

import java.io.File;
import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.EventsDao;
import com.app.dto.ApiResponse;
import com.app.entities.EventEntity;

@Service
@Transactional
public class ImageHandlingServiceImpl implements ImageHandlingService 
{
	@Autowired
	private EventsDao eDao;
	
	@Value("${folder.location}")
	private String folderLocation;
	
	@PostConstruct
	public void init()
	{
		System.out.println("in init " + folderLocation);
		File folder = new File(folderLocation); // check if folder exists --yes --continue
		if (folder.exists()) {
			System.out.println("folder already exists !");
		} else {
			folder.mkdir(); // no --create a folder
			System.out.println("created a folder !");
		}
	}

	@Override
	public ApiResponse uploadImage(Long eventId, MultipartFile image) throws IOException 
	{
		EventEntity event = eDao.findById(eventId).orElseThrow(() -> 
							new ResourceNotFoundException("Invalid event id !"));
		
		String path = folderLocation.concat(image.getOriginalFilename());
		System.out.println(path);
		FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
		event.setImagePath(path);
		return new ApiResponse("Image file uploaded successfully for event id -> " + eventId);
	}
	
	@Override
	public byte[] serveImage(Long eventId) throws IOException
	{		
		EventEntity event = eDao.findById(eventId).orElseThrow(()->new ResourceNotFoundException("Invalid event Id"));
		String path = event.getImagePath();
		
			if (path != null) 
			{
				return FileUtils.readFileToByteArray(new File(path));
			} 
			else 
				throw new ResourceNotFoundException("Image not assigned yet");			
	}
}
