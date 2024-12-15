// package com.example.demo.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.Transaction;
// import com.example.demo.repository.TransactionRepo;

// import java.time.LocalDate;
// import java.util.List;
// import java.util.Optional;

// @Service
// public class TransactionService {

//     @Autowired
//     private TransactionRepo transactionRepository;
//     public boolean deleteTransactionById(Long id) {
//         if (transactionRepository.existsById(id)) {
//             transactionRepository.deleteById(id);
//             return true;
//         }
//         return false;
//     }
//     public List<Transaction> getTransactionsByMonthAndYear(int month, int year) {
//         LocalDate startDate = LocalDate.of(year, month, 1);
//         LocalDate endDate = startDate.withDayOfMonth(startDate.lengthOfMonth());
//         return transactionRepository.findByDateBetween(startDate, endDate);
//     }

//     public Transaction addTransaction(Transaction transaction) {
//         return transactionRepository.save(transaction);
//     }

//     public void deleteTransaction(Long id) {
//         transactionRepository.deleteById(id);
//     }
//     public Transaction editTransaction(Long id, Transaction transaction) {
//         // Check if the transaction exists
//         Optional<Transaction> existingTransactionOptional = transactionRepository.findById(id);
//         if (existingTransactionOptional.isPresent()) {
//             Transaction existingTransaction = existingTransactionOptional.get();
//             // Update the fields as necessary
//             existingTransaction.setDescription(transaction.getDescription());
//             existingTransaction.setAmount(transaction.getAmount());
//             existingTransaction.setType(transaction.getType());
//             existingTransaction.setDate(transaction.getDate());
//             return transactionRepository.save(existingTransaction);
//         }
//         return null; // Transaction not found
// }
// }
package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Transaction;
import com.example.demo.repository.TransactionRepo;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepo transactionRepository;

    // Get transactions by userId, month, and year
    public List<Transaction> getTransactionsByUserAndMonthAndYear(Long userId, int month, int year) {
        LocalDate startDate = LocalDate.of(year, month, 1);
        LocalDate endDate = startDate.withDayOfMonth(startDate.lengthOfMonth());
        return transactionRepository.findByUserIdAndDateBetween(userId, startDate, endDate);
    }

    // Add a new transaction
    public Transaction addTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    // Edit an existing transaction
    public Transaction editTransaction(Long userId, Long transactionId, Transaction transaction) {
        // Check if the transaction exists for the user
        Optional<Transaction> existingTransactionOptional = transactionRepository.findById(transactionId);
        if (existingTransactionOptional.isPresent()) {
            Transaction existingTransaction = existingTransactionOptional.get();
            if (existingTransaction.getUserId().equals(userId)) {
                existingTransaction.setDescription(transaction.getDescription());
                existingTransaction.setAmount(transaction.getAmount());
                existingTransaction.setType(transaction.getType());
                existingTransaction.setDate(transaction.getDate());
                return transactionRepository.save(existingTransaction);
            }
        }
        return null; // Transaction not found or does not belong to the user
    }

    // Delete a transaction
    public boolean deleteTransactionById(Long userId, Long transactionId) {
        Optional<Transaction> existingTransaction = transactionRepository.findById(transactionId);
        if (existingTransaction.isPresent() && existingTransaction.get().getUserId().equals(userId)) {
            transactionRepository.deleteById(transactionId);
            return true;
        }
        return false;
    }
}
