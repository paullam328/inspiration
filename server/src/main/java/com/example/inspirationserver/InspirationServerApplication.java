package com.example.inspirationserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

//@ComponentScan("com.example.inspirationserver.repository") //to prevent bitching from repo bean...
@SpringBootApplication
public class InspirationServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(InspirationServerApplication.class, args);
	}

}
