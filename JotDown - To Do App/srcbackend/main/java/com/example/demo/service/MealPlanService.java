package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.MealPlan;
import com.example.demo.repository.MealPlanRepo;

import java.util.List;

@Service
public class MealPlanService {

    private final MealPlanRepo mealPlanRepo;

    @Autowired
    public MealPlanService(MealPlanRepo mealPlanRepository) {
        this.mealPlanRepo = mealPlanRepository;
    }

    public MealPlan saveMealPlan(MealPlan mealPlan) {
        return mealPlanRepo.save(mealPlan);
    }

    public List<MealPlan> getMealPlansByUserId(Long userId) {
        return mealPlanRepo.findByUserId(userId);
    }

    public void deleteMealPlansByUserId(Long userId) {
        // Ensure that there are meal plans for the user before deleting
        List<MealPlan> mealPlans = mealPlanRepo.findByUserId(userId);
        if (!mealPlans.isEmpty()) {
            mealPlanRepo.deleteByUserId(userId);  // Delete all meal plans for the given user
        } else {
            throw new RuntimeException("No meal plans found for this user.");
        }
    }
}
