package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Signup;
import com.example.demo.repository.SignupRepo;

@RestController
@RequestMapping("/api/users")
public class UserManagementController {

    @Autowired
    private SignupRepo userRepository;

    @DeleteMapping("/{id}")
    // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Object> deleteUser(@PathVariable Long id) {
        Optional<Signup> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.deleteById(id);
            return ResponseEntity.ok("User deleted successfully");
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }
}