import React, { useState, useEffect } from 'react';
import '../css/Profile.css';
import AdminSidebar from './AdminSidebar'

const AdminProfile = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('user'));
    console.log('Retrieved from localStorage:', storedUserData);
    if (storedUserData) {
        setUserData(storedUserData);
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <AdminSidebar/>
      <div className="pheader" style={{display:"flex",flexDirection:"column"}}>
        <div className="pcommon">
          <h1>My Profile</h1>
        </div>
        <div className="profile-container">
          <div className="profile-info">
            <div className="profile-field">
              <label>Username:</label>
              <input 
                type="text" 
                name="username" 
                value={userData.username} 
                disabled 
              />
            </div>
            <div className="profile-field">
              <label>Email:</label>
              <input 
                type="email" 
                name="email" 
                value={userData.email} 
                disabled 
              />
            </div>
            <div className="profile-field">
              <label>Phone Number:</label>
              <input 
                type="text" 
                name="phoneNumber" 
                value={userData.phoneNumber} 
                onChange={handleChange} 
                disabled={!isEditing} 
              />
            </div>
            <div className="profile-field">
              <label>Date of Birth:</label>
              <input 
                type="date" 
                name="dateOfBirth" 
                value={userData.dateOfBirth} 
                onChange={handleChange} 
                disabled={!isEditing} 
              />
            </div>
            <button onClick={isEditing ? handleSaveClick : handleEditClick} style={{marginLeft:"150px"}}>
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
