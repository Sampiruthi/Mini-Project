// package com.example.demo.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.Task;
// import com.example.demo.repository.TaskRepo;

// import java.util.List;

// @Service
// public class TaskService {

//     @Autowired
//     private TaskRepo r;

//     public List<Task> getAllTasks() {
//         return r.findAll();
//     }

//     public Task addTask(Task task) {
//         return r.save(task);
//     }

//     public void deleteTask(Long id) {
//         r.deleteById(id);
//     }
// }
package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepo;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepo taskRepo;

    public List<Task> getAllTasks(Long userId) {
        return taskRepo.findByUserId(userId);  // Fetch tasks based on userId
    }

    public Task addTask(Task task) {
        return taskRepo.save(task);
    }

    public void deleteTask(Long userId, Long taskId) {
        taskRepo.deleteById(taskId); // Deleting task by taskId
    }
}
