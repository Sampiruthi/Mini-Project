// package com.example.demo.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.example.demo.model.Note;
// import com.example.demo.service.NoteService;

// import java.util.List;

// @RestController
// @RequestMapping("/api/notes")
// @CrossOrigin(origins = "http://localhost:3000")
// public class NoteController {

//     @Autowired
//     private NoteService s;

//     @GetMapping
//     public List<Note> getAllNotes() {
//         return s.getAllNotes();
//     }

//     @PostMapping
//     public Note saveOrUpdate(@RequestBody Note note) {
//         return s.saveOrUpdate(note);
//     }

//     @DeleteMapping("/{id}")
//     public void deleteNoteById(@PathVariable Long id) {
//         s.deleteNoteById(id);
//     }

//     @GetMapping("/{id}")
//     public Note getNoteById(@PathVariable Long id) {
//         return s.getNoteById(id);
//     }
//     @PutMapping("/{id}")
//     public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Note note) {
//         Note updatedNote = s.updateNote(id, note);
//         if (updatedNote != null) {
//             return ResponseEntity.ok(updatedNote); // Return updated note
//         }
//         return ResponseEntity.notFound().build(); // Return 404 if note not found
//     }
// }
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Note;
import com.example.demo.service.NoteService;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:3000") // Update with your frontend URL
public class NoteController {

    @Autowired
    private NoteService noteService;

    // Get all notes for a specific user
    @GetMapping("/user/{userId}")
    public List<Note> getAllNotesByUserId(@PathVariable String userId) {
        return noteService.getAllNotesByUserId(userId);
    }

    // Save or update note (Post method)
    @PostMapping("/{userId}")
    public Note saveOrUpdate(@RequestBody Note note, @PathVariable String userId) {
        note.setUserId(userId); // Set the userId before saving the note
        return noteService.saveOrUpdate(note);
    }

    // Delete note by id
    @DeleteMapping("/{id}")
    public void deleteNoteById(@PathVariable Long id) {
        noteService.deleteNoteById(id);
    }

    // Get note by id
    @GetMapping("/{id}")
    public Note getNoteById(@PathVariable Long id) {
        return noteService.getNoteById(id);
    }

    // Update note
    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Note note) {
        Note updatedNote = noteService.updateNote(id, note);
        if (updatedNote != null) {
            return ResponseEntity.ok(updatedNote); // Return updated note
        }
        return ResponseEntity.notFound().build(); // Return 404 if note not found
    }
}
