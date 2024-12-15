// package com.example.demo.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.Note;
// import com.example.demo.repository.NoteRepo;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class NoteService {

//     @Autowired
//     private NoteRepo noteRepository;

//     public List<Note> getAllNotes() {
//         return noteRepository.findAll();
//     }

//     public Note saveOrUpdate(Note note) {
//         return noteRepository.save(note);
//     }

//     public void deleteNoteById(Long id) {
//         noteRepository.deleteById(id);
//     }

//     public Note getNoteById(Long id) {
//         return noteRepository.findById(id).orElse(null);
//     }

//     public Note updateNote(Long id, Note updatedNote) {
//         Optional<Note> existingNoteOpt = noteRepository.findById(id);
//         if (existingNoteOpt.isPresent()) {
//             Note existingNote = existingNoteOpt.get();
//             existingNote.setContent(updatedNote.getContent());
//             return noteRepository.save(existingNote); // Save updated note
//         }
//         return null; // Or throw an exception if not found
//     }
// }
package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Note;
import com.example.demo.repository.NoteRepo;

import java.util.List;
import java.util.Optional;

@Service
public class NoteService {

    @Autowired
    private NoteRepo noteRepository;

    // Get all notes for a specific user
    public List<Note> getAllNotesByUserId(String userId) {
        return noteRepository.findByUserId(userId);
    }

    // Save or update note
    public Note saveOrUpdate(Note note) {
        return noteRepository.save(note);
    }

    // Delete note by id
    public void deleteNoteById(Long id) {
        noteRepository.deleteById(id);
    }

    // Get note by id
    public Note getNoteById(Long id) {
        return noteRepository.findById(id).orElse(null);
    }

    // Update note
    public Note updateNote(Long id, Note updatedNote) {
        Optional<Note> existingNoteOpt = noteRepository.findById(id);
        if (existingNoteOpt.isPresent()) {
            Note existingNote = existingNoteOpt.get();
            existingNote.setContent(updatedNote.getContent());
            return noteRepository.save(existingNote); // Save updated note
        }
        return null; // Or throw an exception if not found
    }
}
