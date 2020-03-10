package com.example.inspirationserver.service;

import com.example.inspirationserver.exceptions.CustomResponse;
import com.example.inspirationserver.exceptions.NoSuchUserException;
import com.example.inspirationserver.model.UserCredential;
import com.example.inspirationserver.repository.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Map;

@Service
public class UserCredentialService {

    @Autowired
    private UserCredentialRepository userCredentialRepository;

    public boolean doesUsernameExist(String username) {
        ArrayList<?> userCredentials = userCredentialRepository.getSameUserCredential(username);

        return userCredentials.size() > 0;
    }


    public void CreateAccount(UserCredential uc) {

        userCredentialRepository.save(uc);
    }

    public CustomResponse getLoginUser(UserCredential uc) {
        CustomResponse customResponse = new CustomResponse();

        ArrayList<Map<String, Object>> userCredentials = userCredentialRepository.getMatchedUsernamePasswordCredential(uc.getUsername(), uc.getPassword());
        if (userCredentials.size() > 0) {
            customResponse.setCode(HttpStatus.OK.value());
            customResponse.setMessage("User Login Successful!");
        } else {
            throw new NoSuchUserException();
        }

        return customResponse;
    }
}
