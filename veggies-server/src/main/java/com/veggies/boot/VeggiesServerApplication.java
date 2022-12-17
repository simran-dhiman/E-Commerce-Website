package com.veggies.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EntityScan(basePackages = {"com.veggies.veggies_server.entity"})
@EnableJpaRepositories(basePackages = {"com.veggies.veggies_server.repository"})
@ComponentScan(basePackages = {"com.veggies.veggies_server"})
public class VeggiesServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(VeggiesServerApplication.class, args);
	}

}
