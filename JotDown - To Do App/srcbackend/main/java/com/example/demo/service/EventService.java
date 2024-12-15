package com.example.demo.service;

import com.example.demo.model.Event;
import com.example.demo.repository.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventRepo r;

    public List<Event> getEventsByDate(Date date) {
        return r.findByDate(date);
    }

    public Event saveEvent(Event event) {
        return r.save(event);
    }

    public Event updateEvent(Long id, Event eventDetails) {
        Event event = r.findById(id).orElseThrow(() -> new RuntimeException("Event not found"));
        event.setTitle(eventDetails.getTitle());
        event.setDate(eventDetails.getDate());
        return r.save(event);
    }

    public void deleteEvent(Long id) {
        r.deleteById(id);
    }
}