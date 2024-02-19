package com.app.custom_exceptions;

public class ResourceNotException extends RuntimeException
{
	public ResourceNotException(String message) 
	{
		super(message);
	}	
}
