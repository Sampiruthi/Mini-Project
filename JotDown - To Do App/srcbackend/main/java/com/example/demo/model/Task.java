// package com.example.demo.model;

// import java.time.LocalDate;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;

// @Entity
// public class Task {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String title;
//     private String description;
//     private LocalDate dueDate;
//     private String fromTime;
//     private String toTime;
//     private String priority;
//     private boolean completed;

//     // Getters and setters
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

//     public String getDescription() {
//         return description;
//     }

//     public void setDescription(String description) {
//         this.description = description;
//     }

//     public LocalDate getDueDate() {
//         return dueDate;
//     }

//     public void setDueDate(LocalDate dueDate) {
//         this.dueDate = dueDate;
//     }

//     public String getFromTime() {
//         return fromTime;
//     }

//     public void setFromTime(String fromTime) {
//         this.fromTime = fromTime;
//     }

//     public String getToTime() {
//         return toTime;
//     }

//     public void setToTime(String toTime) {
//         this.toTime = toTime;
//     }

//     public String getPriority() {
//         return priority;
//     }

//     public void setPriority(String priority) {
//         this.priority = priority;
//     }

//     public boolean isCompleted() {
//         return completed;
//     }

//     public void setCompleted(boolean completed) {
//         this.completed = completed;
//     }
// }
package com.example.demo.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;  // Add userId to associate tasks with a specific user
    private String title;
    private String description;
    private LocalDate dueDate;
    private String fromTime;
    private String toTime;
    private String priority;
    private boolean completed;

    // Getters and setters
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public String getFromTime() {
        return fromTime;
    }

    public void setFromTime(String fromTime) {
        this.fromTime = fromTime;
    }

    public String getToTime() {
        return toTime;
    }

    public void setToTime(String toTime) {
        this.toTime = toTime;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
