package com.example.inspirationserver.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings({"unchecked", "rawtypes"})
@ControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler(UsernameAlreadyExistException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ResponseBody
    public CustomResponse handleUsernameAlreadyExistException(UsernameAlreadyExistException ex) {
        CustomResponse customResponse = new CustomResponse();
        customResponse.setCode(HttpStatus.FORBIDDEN.value());
        customResponse.setMessage("Username Already Exist!");
        return customResponse;
    }

    @ExceptionHandler(NoSuchUserException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ResponseBody
    public CustomResponse handleNoSuchUserException(NoSuchUserException ex) {
        CustomResponse customResponse = new CustomResponse();
        customResponse.setCode(HttpStatus.FORBIDDEN.value());
        customResponse.setMessage("Invalid Username/Password!");
        return customResponse;
    }
}

