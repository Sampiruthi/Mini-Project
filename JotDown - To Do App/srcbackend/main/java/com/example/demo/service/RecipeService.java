package com.example.demo.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import com.example.demo.model.Recipe;
// import com.example.demo.repository.RecipeRepo;
// import java.util.List;

// @Service
// public class RecipeService {
    
//     @Autowired
//     private RecipeRepo r;

//     public Recipe saveRecipe(Recipe recipe) {
//         return r.save(recipe);
//     }

//     public List<Recipe> getAllRecipes() {
//         return r.findAll();
//     }

//     public Recipe getRecipeById(Long id) {
//         return r.findById(id).orElse(null);
//     }

//     public void deleteRecipe(Long id) {
//         r.deleteById(id);
//     }

//     public Recipe updateRecipe(Recipe recipe) {
//         return r.save(recipe);
//     }
// }
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Recipe;
import com.example.demo.repository.RecipeRepo;
import java.util.List;

@Service
public class RecipeService {
    
    @Autowired
    private RecipeRepo r;

    public Recipe saveRecipe(Recipe recipe) {
        return r.save(recipe);
    }

    public List<Recipe> getAllRecipes() {
        return r.findAll();
    }

    public List<Recipe> getRecipesByUserId(Long userId) {
        return r.findByUserId(userId); // Get recipes for a specific user
    }

    public Recipe getRecipeById(Long id) {
        return r.findById(id).orElse(null);
    }

    public void deleteRecipe(Long id) {
        r.deleteById(id);
    }

    public Recipe updateRecipe(Recipe recipe) {
        return r.save(recipe);
    }
}
