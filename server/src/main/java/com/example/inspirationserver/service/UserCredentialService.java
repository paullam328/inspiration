package com.example.inspirationserver.service;

import com.example.inspirationserver.model.UserCredential;
import com.example.inspirationserver.repository.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

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
}
