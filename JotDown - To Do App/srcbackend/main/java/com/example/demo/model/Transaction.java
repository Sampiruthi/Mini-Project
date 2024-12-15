// package com.example.demo.model;

// import jakarta.persistence.*;

// import java.time.LocalDate;

// @Entity
// @Table(name = "transactions")
// public class Transaction {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String description;
//     private Double amount;
//     private String type; // "income" or "expense"
//     private LocalDate date;

//     // Getters and Setters
//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getDescription() {
//         return description;
//     }

//     public void setDescription(String description) {
//         this.description = description;
//     }

//     public Double getAmount() {
//         return amount;
//     }

//     public void setAmount(Double amount) {
//         this.amount = amount;
//     }

//     public String getType() {
//         return type;
//     }

//     public void setType(String type) {
//         this.type = type;
//     }

//     public LocalDate getDate() {
//         return date;
//     }

//     public void setDate(LocalDate date) {
//         this.date = date;
//     }
// }
package com.example.demo.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId; // Add userId to the model

    private String description;
    private Double amount;
    private String type; // "income" or "expense"
    private LocalDate date;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
