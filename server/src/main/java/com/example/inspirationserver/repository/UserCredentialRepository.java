package com.example.inspirationserver.repository;

import com.example.inspirationserver.model.UserCredential;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Service
public interface UserCredentialRepository extends CrudRepository<UserCredential, Integer> {

    @Transactional
    @Modifying
    @Query("SELECT username FROM UserCredential WHERE username = :username")
    ArrayList<?> getSameUserCredential(@Param("username") String username);

    @Transactional
    @Modifying
    @Query("SELECT id, username, password FROM UserCredential WHERE username = :username AND password = :password")
    ArrayList<Map<String, Object>> getMatchedUsernamePasswordCredential(@Param("username") String username, @Param("password") String password);

}
