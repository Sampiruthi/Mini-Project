package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.MealPlan;
import com.example.demo.service.MealPlanService;

import java.util.List;

@RestController
@RequestMapping("/api/mealplans")
public class MealPlanController {

    private final MealPlanService mealPlanService;

    @Autowired
    public MealPlanController(MealPlanService mealPlanService) {
        this.mealPlanService = mealPlanService;
    }

    // POST endpoint to save a new meal plan
    @PostMapping("/save")
    public ResponseEntity<MealPlan> saveMealPlan(@RequestBody MealPlan mealPlan) {
        MealPlan savedMealPlan = mealPlanService.saveMealPlan(mealPlan);
        return ResponseEntity.ok(savedMealPlan);
    }

    // GET endpoint to retrieve meal plans for a specific user by userId
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<MealPlan>> getMealPlans(@PathVariable Long userId) {
        List<MealPlan> mealPlans = mealPlanService.getMealPlansByUserId(userId);
        return ResponseEntity.ok(mealPlans);
    }

    @DeleteMapping("/clear/{userId}")
public ResponseEntity<Void> clearMealPlans(@PathVariable Long userId) {
    try {
        mealPlanService.deleteMealPlansByUserId(userId);
        return ResponseEntity.noContent().build();  // 204 No Content
    } catch (Exception e) {
        return ResponseEntity.status(500).build();  // 500 Internal Server Error if something goes wrong
    }
}

}
