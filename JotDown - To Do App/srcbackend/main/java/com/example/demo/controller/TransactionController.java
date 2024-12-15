// package com.example.demo.controller;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.example.demo.model.Transaction;
// import com.example.demo.service.TransactionService;

// import java.util.List;

// @RestController
// @RequestMapping("/api/transactions")
// public class TransactionController {

//     @Autowired
//     private TransactionService transactionService;

//     // Fetch transactions by month and year
//     @GetMapping("/{month}/{year}")
//     public ResponseEntity<List<Transaction>> getTransactionsByMonthAndYear(@PathVariable int month, @PathVariable int year) {
//         List<Transaction> transactions = transactionService.getTransactionsByMonthAndYear(month, year);
//         return new ResponseEntity<>(transactions, HttpStatus.OK);
//     }

//     // Add a new transaction
//     @PostMapping
//     public ResponseEntity<Transaction> addTransaction(@RequestBody Transaction transaction) {
//         Transaction newTransaction = transactionService.addTransaction(transaction);
//         return new ResponseEntity<>(newTransaction, HttpStatus.CREATED);
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<Transaction> editTransaction(@PathVariable Long id, @RequestBody Transaction transaction) {
//         Transaction updatedTransaction = transactionService.editTransaction(id, transaction);
//         if (updatedTransaction != null) {
//             return new ResponseEntity<>(updatedTransaction, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Transaction not found
//         }
//     }
//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
//         boolean isRemoved = transactionService.deleteTransactionById(id);
//         if (!isRemoved) {
//             return ResponseEntity.notFound().build(); // Return 404 if transaction not found
//         }
//         return ResponseEntity.noContent().build(); // Return 204 if deleted successfully
//     }
// }
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Transaction;
import com.example.demo.service.TransactionService;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    // Fetch transactions by userId, month, and year
    @GetMapping("/{userId}/{month}/{year}")
    public ResponseEntity<List<Transaction>> getTransactionsByUserAndMonthAndYear(
            @PathVariable Long userId,
            @PathVariable int month,
            @PathVariable int year) {
        List<Transaction> transactions = transactionService.getTransactionsByUserAndMonthAndYear(userId, month, year);
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }
    @PostMapping("/{userId}")
    public ResponseEntity<Transaction> addTransaction(@PathVariable Long userId, @RequestBody Transaction transaction) {
        transaction.setUserId(userId);
        Transaction newTransaction = transactionService.addTransaction(transaction);
        return new ResponseEntity<>(newTransaction, HttpStatus.CREATED);
    }
    @PutMapping("/{userId}/{id}")
    public ResponseEntity<Transaction> editTransaction(@PathVariable Long userId, @PathVariable Long id, @RequestBody Transaction transaction) {
        Transaction updatedTransaction = transactionService.editTransaction(userId, id, transaction);
        if (updatedTransaction != null) {
            return new ResponseEntity<>(updatedTransaction, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }
    }
    @DeleteMapping("/{userId}/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long userId, @PathVariable Long id) {
        boolean isRemoved = transactionService.deleteTransactionById(userId, id);
        if (!isRemoved) {
            return ResponseEntity.notFound().build(); 
        }
        return ResponseEntity.noContent().build(); 
    }
}
