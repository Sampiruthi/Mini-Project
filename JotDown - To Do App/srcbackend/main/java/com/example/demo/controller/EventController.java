package com.example.demo.controller;

import com.example.demo.model.Event;
import com.example.demo.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventService s;

    @GetMapping("/{date}")
    public List<Event> getEventsByDate(@PathVariable String date) {
        Date parsedDate = java.sql.Date.valueOf(date);
        return s.getEventsByDate(parsedDate);
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return s.saveEvent(event);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        Event updatedEvent = s.updateEvent(id, eventDetails);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        s.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }
}