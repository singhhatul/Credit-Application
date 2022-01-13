package com.assignment.loanApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.assignment.loanApplication.model.Credit;

@Repository
public interface CreditRepository extends JpaRepository<Credit, String>{

}
