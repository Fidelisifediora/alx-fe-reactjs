// UserProfile.jsx

import React from 'react';
import './UserProfile.css';  // Assuming you have a separate CSS file for styling

const UserProfile = () => {
  return (
    <div className="profile-container">
      <img
        src="https://via.placeholder.com/150"  // Replace with the actual image URL
        alt="Profile"
        className="profile-image"
      />
      <h1 className="profile-heading">John Doe</h1>
      <p className="profile-description">Software Developer | Tech Enthusiast</p>
    </div>
  );
};

export default UserProfile;
