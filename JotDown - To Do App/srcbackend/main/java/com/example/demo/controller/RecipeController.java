package com.example.demo.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.example.demo.exception.ResourceNotFoundException;
// import com.example.demo.model.Recipe;
// import com.example.demo.repository.RecipeRepo;
// import com.example.demo.service.RecipeService;
// import java.util.List;

// @CrossOrigin(origins = "http://localhost:3000")
// @RestController
// @RequestMapping("/api/recipes")
// public class RecipeController {

//     @Autowired
//     private RecipeService r;
//     @Autowired
//     private RecipeRepo repo;
//     @PostMapping("/post")
//     public ResponseEntity<Recipe> addRecipe(@RequestBody Recipe recipe) {
//         Recipe savedRecipe = r.saveRecipe(recipe);
//         return new ResponseEntity<>(savedRecipe, HttpStatus.CREATED);
//     }

//     @GetMapping("/getall")
//     public List<Recipe> getAllRecipes() {
//         return r.getAllRecipes();
//     }

//     @GetMapping("/get/{id}")
//     public Recipe getRecipeById(@PathVariable Long id) {
//         return r.getRecipeById(id);
//     }

//     @PutMapping("/update/{id}")
//     public ResponseEntity<Recipe> updateRecipe(@PathVariable Long id, @RequestBody Recipe recipeDetails) {
//         Recipe recipe = repo.findById(id)
//                 .orElseThrow(() -> new ResourceNotFoundException("Recipe not found"));

//         recipe.setTitle(recipeDetails.getTitle());
//         recipe.setIngredients(String.join(",", recipeDetails.getIngredients())); // Assuming ingredients stored as a
//                                                                                  // string
//         recipe.setInstructions(String.join(",", recipeDetails.getInstructions())); // Assuming instructions stored as a
//                                                                                    // string
//         recipe.setImageUrl(recipeDetails.getImageUrl());

//         final Recipe updatedRecipe = repo.save(recipe);
//         return ResponseEntity.ok(updatedRecipe);
//     }

//     @DeleteMapping("/delete/{id}")
//     public void deleteRecipe(@PathVariable Long id) {
//         r.deleteRecipe(id);
//     }
// }
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Recipe;
import com.example.demo.service.RecipeService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @PostMapping("/post")
    public ResponseEntity<Recipe> addRecipe(@RequestBody Recipe recipe) {
        if (recipe.getUserId() == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Recipe savedRecipe = recipeService.saveRecipe(recipe);
        return new ResponseEntity<>(savedRecipe, HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Recipe>> getRecipesByUserId(@PathVariable Long userId) {
        List<Recipe> userRecipes = recipeService.getRecipesByUserId(userId);
        if (userRecipes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
        return new ResponseEntity<>(userRecipes, HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public Recipe getRecipeById(@PathVariable Long id) {
        return recipeService.getRecipeById(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable Long id, @RequestBody Recipe recipeDetails) {
        Recipe recipe = recipeService.getRecipeById(id);
        if (recipe == null) {
            throw new ResourceNotFoundException("Recipe not found");
        }

        recipe.setTitle(recipeDetails.getTitle());
        recipe.setIngredients(recipeDetails.getIngredients());
        recipe.setInstructions(recipeDetails.getInstructions());
        recipe.setImageUrl(recipeDetails.getImageUrl());

        final Recipe updatedRecipe = recipeService.saveRecipe(recipe);
        return ResponseEntity.ok(updatedRecipe);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteRecipe(@PathVariable Long id) {
        recipeService.deleteRecipe(id);
    }
}