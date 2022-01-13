package com.assignment.loanApplication.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.assignment.loanApplication.model.Credit;
import com.assignment.loanApplication.repository.CreditRepository;

@CrossOrigin
@RestController
public class CreditController {
	
	@Autowired
	private CreditRepository creditRepository;
	
//	@GetMapping("/v1/fetch/{id}")
//	public String fetchDetails(@PathVariable long id) {
//		return creditRepository.findAllById(id).getFirstName(); 
//		
//	}
	
	@GetMapping("/v1/fetch")
	public List<Credit> fetchDetails() {
		return creditRepository.findAll();
		
	}
	@PostMapping("/v1/save")
	public String  storeDetails(@RequestBody Credit credit) {
		UUID uuid = UUID.randomUUID();
		credit.setId(uuid.toString());
		creditRepository.save(credit);
		return "Successfully Stored Data!! for "+credit.getFirstName();
	}
}
