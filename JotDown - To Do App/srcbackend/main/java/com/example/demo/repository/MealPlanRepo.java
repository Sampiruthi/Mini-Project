package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.MealPlan;

import java.util.List;

@Repository
public interface MealPlanRepo extends JpaRepository<MealPlan, Long> {
    List<MealPlan> findByUserId(Long userId);
    void deleteByUserId(Long userId); 
}

