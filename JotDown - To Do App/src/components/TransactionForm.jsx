import React, { useState, useEffect } from 'react';
import '../css/styles.css';

const TransactionForm = ({ onAddTransaction, editingTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('income');

    useEffect(() => {
        if (editingTransaction) {
            setDescription(editingTransaction.description);
            setAmount(editingTransaction.amount);
            setType(editingTransaction.type);
        } else {
            setDescription('');
            setAmount('');
            setType('income');
        }
    }, [editingTransaction]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            description,
            amount: parseFloat(amount),
            type,
            date: new Date().toISOString(),
        };
        onAddTransaction(newTransaction);
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <button type="submit" style={{height:"70px"}}>{editingTransaction ? 'Update Transaction' : 'Add Transaction'}</button>
        </form>
    );
};

export default TransactionForm;