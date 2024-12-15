import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import AdminSidebar from './AdminSidebar';
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [role, setRole] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/users/all-users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  const handleDeleteClick = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`http://localhost:8080/api/users/${userId}`)
        .then(response => {
          alert("User deleted successfully");
          setUsers(users.filter(user => user.id !== userId));
        })
        .catch(error => {
          console.error("There was an error deleting the user!", error);
        });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <AdminSidebar />
      <div className="user-management" style={{ marginLeft: "350px", marginTop: "20px" }}>
        <h1>User Management</h1>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th style={{ paddingLeft: "100px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <IconButton
                    onClick={() => handleDeleteClick(user.id)}
                    sx={{ width: "100px", color: "#FF5A5A", paddingRight: "250px" }}

                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
