package com.example.demo.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Column;

// @Entity
// public class Recipe {
    
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
    
//     @Column(nullable = false)
//     private String title;
    
//     @Column(nullable = false, columnDefinition = "TEXT")
//     private String ingredients;
    
//     @Column(nullable = false, columnDefinition = "TEXT")
//     private String instructions;
    
//     @Column
//     private String imageUrl;

//     // Constructors
//     public Recipe() {}

//     public Recipe(String title, String ingredients, String instructions, String imageUrl) {
//         this.title = title;
//         this.ingredients = ingredients;
//         this.instructions = instructions;
//         this.imageUrl = imageUrl;
//     }

//     // Getters and Setters
//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getTitle() {
//         return title;
//     }

//     public void setTitle(String title) {
//         this.title = title;
//     }

//     public String getIngredients() {
//         return ingredients;
//     }

//     public void setIngredients(String ingredients) {
//         this.ingredients = ingredients;
//     }

//     public String getInstructions() {
//         return instructions;
//     }

//     public void setInstructions(String instructions) {
//         this.instructions = instructions;
//     }

//     public String getImageUrl() {
//         return imageUrl;
//     }

//     public void setImageUrl(String imageUrl) {
//         this.imageUrl = imageUrl;
//     }
// }
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Recipe {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(nullable = false, columnDefinition = "TEXT")
    private String ingredients;
    
    @Column(nullable = false, columnDefinition = "TEXT")
    private String instructions;
    
    @Column
    private String imageUrl;
    
    @Column(nullable = false)
    private Long userId; // New field to associate recipe with user

    // Constructors
    public Recipe() {}

    public Recipe(String title, String ingredients, String instructions, String imageUrl, Long userId) {
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.imageUrl = imageUrl;
        this.userId = userId;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
