package com.example.demo.repository;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;
// import com.example.demo.model.Recipe;

// @Repository
// public interface RecipeRepo extends JpaRepository<Recipe,Long> {
    
// }
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Recipe;
import java.util.List;

public interface RecipeRepo extends JpaRepository<Recipe, Long> {
    List<Recipe> findByUserId(Long userId); // Custom query to find recipes by userId
}
