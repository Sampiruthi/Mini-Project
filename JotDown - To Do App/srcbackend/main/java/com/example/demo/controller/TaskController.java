// package com.example.demo.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import com.example.demo.model.Task;
// import com.example.demo.service.TaskService;

// import java.util.List;

// @RestController
// @RequestMapping("/tasks")
// @CrossOrigin(origins = "http://localhost:3000") // For allowing CORS with the frontend
// public class TaskController {

//     @Autowired
//     private TaskService taskService;

//     @GetMapping
//     public List<Task> getAllTasks() {
//         return taskService.getAllTasks();
//     }

//     @PostMapping
//     public Task addTask(@RequestBody Task task) {
//         return taskService.addTask(task);
//     }

//     @DeleteMapping("/{id}")
//     public void deleteTask(@PathVariable Long id) {
//         taskService.deleteTask(id);
//     }
// }
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Task;
import com.example.demo.service.TaskService;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:3000") // For allowing CORS with the frontend
public class TaskController {

    @Autowired
    private TaskService taskService;

    // Get tasks for a specific user
    @GetMapping("/get/{userId}")
    public List<Task> getTasksByUserId(@PathVariable Long userId) {
        return taskService.getAllTasks(userId);  // Fetch tasks for the logged-in user
    }

    // Add a new task
    @PostMapping("/post/{userId}")
    public Task addTask(@PathVariable Long userId, @RequestBody Task task) {
        task.setUserId(userId);  // Set the userId for the new task
        return taskService.addTask(task);
    }

    // Delete a task
    @DeleteMapping("/{userId}/{taskId}")
    public void deleteTask(@PathVariable Long userId, @PathVariable Long taskId) {
        taskService.deleteTask(userId, taskId); // Delete task by taskId
    }
}
