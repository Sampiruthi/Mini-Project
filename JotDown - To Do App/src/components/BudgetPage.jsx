// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TransactionForm from './TransactionForm';
// import TransactionList from './TransactionList';
// import '../css/styles.css';
// import Sidebar from './Sidebar';

// const BudgetPage = () => {
//     const [transactions, setTransactions] = useState([]);
//     const [month, setMonth] = useState(new Date().getMonth() + 1);
//     const [year, setYear] = useState(new Date().getFullYear());
//     const [balance, setBalance] = useState(0);
//     const [editingTransaction, setEditingTransaction] = useState(null);

//     useEffect(() => {
//         fetchTransactions(month, year);
//     }, [month, year]);

//     useEffect(() => {
//         updateBalance();
//     }, [transactions]);

//     const fetchTransactions = async (month, year) => {
//         try {
//             const response = await axios.get(`http://localhost:8080/api/transactions/${month}/${year}`);
//             setTransactions(response.data);
//         } catch (error) {
//             console.error('Error fetching transactions:', error);
//         }
//     };
//     const handleAddTransaction = async (newTransaction) => {
//         if (editingTransaction) {
//             try {
//                 const response = await axios.put(`http://localhost:8080/api/transactions/${editingTransaction.id}`, newTransaction);
//                 setTransactions((prev) => prev.map(tx => (tx.id === editingTransaction.id ? response.data : tx)));
//                 setEditingTransaction(null);
//             } catch (error) {
//                 console.error('Error updating transaction:', error);
//             }
//         } else {
//             try {
//                 const response = await axios.post('http://localhost:8080/api/transactions', newTransaction);
//                 setTransactions((prev) => [...prev, response.data]);
//                 resetTransactionForm();
//             } catch (error) {
//                 console.error('Error adding transaction:', error);
//             }
//         }
//     };
//     const resetTransactionForm = () => {
//         setEditingTransaction(null); 
//     };
//     const handleDeleteTransaction = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/api/transactions/${id}`);
//             setTransactions((prev) => prev.filter(tx => tx.id !== id));
//         } catch (error) {
//             console.error('Error deleting transaction:', error);
//         }
//     };

//     const handleEditTransaction = (transaction) => {
//         setEditingTransaction(transaction);
//     };

//     const handleResetEditing = () => {
//         setEditingTransaction(null);
//     };

//     const updateBalance = () => {
//         const income = transactions
//             .filter((transaction) => transaction.type === 'income')
//             .reduce((acc, transaction) => acc + transaction.amount, 0);
//         const expense = transactions
//             .filter((transaction) => transaction.type === 'expense')
//             .reduce((acc, transaction) => acc + transaction.amount, 0);
//         setBalance(income - expense);
//     };

//     return (
//         <div style={{ display: "flex", flexDirection: "row" }}>
//             <Sidebar />
//             <div className="budget-page" style={{ marginLeft: "230px" }}>
//                 <h1>Budget Tracker</h1>
//                 <div className="month-select">
//                     <input
//                         type="month"
//                         value={`${year}-${String(month).padStart(2, '0')}`}
//                         onChange={(e) => {
//                             const [yr, mnth] = e.target.value.split('-');
//                             setYear(parseInt(yr));
//                             setMonth(parseInt(mnth));
//                         }}
//                     />
//                 </div>
//                 <h2>Current Balance: {balance.toFixed(2)}</h2>
//                 <TransactionForm onAddTransaction={handleAddTransaction} editingTransaction={editingTransaction} />
//                 <div className="transaction-lists">
//                     <TransactionList
//                         transactions={transactions.filter((t) => t.type === 'income')}
//                         type="Income"
//                         onEditTransaction={handleEditTransaction}
//                         onDeleteTransaction={handleDeleteTransaction}
//                         onResetEditing={handleResetEditing}
//                     />
//                     <TransactionList
//                         transactions={transactions.filter((t) => t.type === 'expense')}
//                         type="Expense"
//                         onEditTransaction={handleEditTransaction}
//                         onDeleteTransaction={handleDeleteTransaction}
//                         onResetEditing={handleResetEditing}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BudgetPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import '../css/styles.css';
import Sidebar from './Sidebar';

const BudgetPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [balance, setBalance] = useState(0);
    const [editingTransaction, setEditingTransaction] = useState(null);
    const [userId, setUserId] = useState(null); // Store the user ID here

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId"); // Assuming user ID is stored in local storage after login
        if (!storedUserId) {
            // Handle case where user is not logged in
            console.error("User not logged in");
        } else {
            setUserId(storedUserId);
            fetchTransactions(storedUserId, month, year);
        }
    }, [month, year]);

    useEffect(() => {
        updateBalance();
    }, [transactions]);

    const fetchTransactions = async (userId, month, year) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/transactions/${userId}/${month}/${year}`);
            setTransactions(response.data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const handleAddTransaction = async (newTransaction) => {
        if (!userId) {
            console.error("User ID is missing!");
            return;
        }

        newTransaction.userId = userId;

        if (editingTransaction) {
            try {
                const response = await axios.put(`http://localhost:8080/api/transactions/${userId}/${editingTransaction.id}`, newTransaction);
                setTransactions((prev) => prev.map(tx => (tx.id === editingTransaction.id ? response.data : tx)));
                setEditingTransaction(null);
            } catch (error) {
                console.error('Error updating transaction:', error);
            }
        } else {
            try {
                const response = await axios.post(`http://localhost:8080/api/transactions/${userId}`, newTransaction);
                setTransactions((prev) => [...prev, response.data]);
                resetTransactionForm();
            } catch (error) {
                console.error('Error adding transaction:', error);
            }
        }
    };

    const resetTransactionForm = () => {
        setEditingTransaction(null);
    };

    const handleDeleteTransaction = async (id) => {
        if (!userId) {
            console.error("User ID is missing!");
            return;
        }

        try {
            await axios.delete(`http://localhost:8080/api/transactions/${userId}/${id}`);
            setTransactions((prev) => prev.filter(tx => tx.id !== id));
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };

    const handleEditTransaction = (transaction) => {
        setEditingTransaction(transaction);
    };

    const handleResetEditing = () => {
        setEditingTransaction(null);
    };

    const updateBalance = () => {
        const income = transactions
            .filter((transaction) => transaction.type === 'income')
            .reduce((acc, transaction) => acc + transaction.amount, 0);
        const expense = transactions
            .filter((transaction) => transaction.type === 'expense')
            .reduce((acc, transaction) => acc + transaction.amount, 0);
        setBalance(income - expense);
    };

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <div className="budget-page" style={{ marginLeft: "230px" }}>
                <h1>Budget Tracker</h1>
                <div className="month-select">
                    <input
                        type="month"
                        value={`${year}-${String(month).padStart(2, '0')}`}
                        onChange={(e) => {
                            const [yr, mnth] = e.target.value.split('-');
                            setYear(parseInt(yr));
                            setMonth(parseInt(mnth));
                        }}
                    />
                </div>
                <h2>Current Balance: {balance.toFixed(2)}</h2>
                <TransactionForm onAddTransaction={handleAddTransaction} editingTransaction={editingTransaction} />
                <div className="transaction-lists">
                    <TransactionList
                        transactions={transactions.filter((t) => t.type === 'income')}
                        type="Income"
                        onEditTransaction={handleEditTransaction}
                        onDeleteTransaction={handleDeleteTransaction}
                        onResetEditing={handleResetEditing}
                    />
                    <TransactionList
                        transactions={transactions.filter((t) => t.type === 'expense')}
                        type="Expense"
                        onEditTransaction={handleEditTransaction}
                        onDeleteTransaction={handleDeleteTransaction}
                        onResetEditing={handleResetEditing}
                    />
                </div>
            </div>
        </div>
    );
};

export default BudgetPage;
