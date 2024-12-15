// package com.example.demo.repository;

// import com.example.demo.model.Transaction;
// import org.springframework.data.jpa.repository.JpaRepository;

// import java.time.LocalDate;
// import java.util.List;

// public interface TransactionRepo extends JpaRepository<Transaction, Long> {
//     List<Transaction> findByDate(LocalDate date);
//     List<Transaction> findByType(String type);
    
//     // Add this method to find transactions by month and year
//     List<Transaction> findByDateBetween(LocalDate startDate, LocalDate endDate);
// }
package com.example.demo.repository;

import com.example.demo.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TransactionRepo extends JpaRepository<Transaction, Long> {
    
    // Fetch transactions by userId, month, and year
    List<Transaction> findByUserIdAndDateBetween(Long userId, LocalDate startDate, LocalDate endDate);

    // Fetch transactions by type (income/expense)
    List<Transaction> findByUserIdAndType(Long userId, String type);

    // Fetch all transactions by userId
    List<Transaction> findByUserId(Long userId);
}
