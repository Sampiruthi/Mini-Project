import { Box, IconButton } from '@mui/material';
import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const TransactionList = ({ transactions, type, onEditTransaction, onDeleteTransaction, onResetEditing }) => {
    return (
        <div className="transaction-list" onClick={onResetEditing}>
            <h2>{type}</h2>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id} onClick={(e) => e.stopPropagation()}> {/* Prevent click from bubbling up */}
                        <span>{transaction.description}</span>
                        <span>{transaction.amount.toFixed(2)}</span>
                        <div className="transaction-actions">
                            <Box>
                                <IconButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onEditTransaction(transaction);
                                    }}
                                    sx={{ color: "#007BFF", width: "50px" }}
                                    aria-label={`edit transaction ${transaction.id}`}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDeleteTransaction(transaction.id);
                                    }}
                                    sx={{ width: "50px", color: "#FF5A5A" }}
                                    aria-label={`delete transaction ${transaction.id}`}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Box>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;