// package com.example.demo.repository;

// import org.springframework.data.jpa.repository.JpaRepository;

// import com.example.demo.model.Note;

// public interface NoteRepo extends JpaRepository<Note, Long> {
// }
package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Note;

import java.util.List;

public interface NoteRepo extends JpaRepository<Note, Long> {
    List<Note> findByUserId(String userId); // Method to find notes by userId
}
