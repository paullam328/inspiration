package com.example.inspirationserver.controller;


import com.example.inspirationserver.exceptions.CustomResponse;
import com.example.inspirationserver.exceptions.UsernameAlreadyExistException;
import com.example.inspirationserver.model.UserCredential;
import com.example.inspirationserver.service.UserCredentialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/")
@CrossOrigin(origins = "http://localhost:19000")
public class UserCredentialController {

    @Autowired
    private UserCredentialService userCredentialService;

    @PostMapping(path="/post/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody CustomResponse RegisterAcc(@RequestBody UserCredential userCredential) {
        //if (check account no duplicate)
        //then register account
        if (userCredentialService.doesUsernameExist(userCredential.getUsername())) {
            throw new UsernameAlreadyExistException();
        } else {
            userCredentialService.CreateAccount(userCredential);

            CustomResponse customResponse = new CustomResponse();
            customResponse.setCode(HttpStatus.CREATED.value());
            customResponse.setMessage("Account Successfully Created!");
            return customResponse;
        }
    }

    @PostMapping(path="/post/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    CustomResponse Login(@RequestBody UserCredential userCredential) {
        //if (check account no duplicate)
        //then register account
        CustomResponse uc = userCredentialService.getLoginUser(userCredential);
        return uc;
    }
}
