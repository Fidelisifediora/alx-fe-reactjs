// UserProfile.jsx

import React from 'react';

const UserProfile = () => {
  return (
    <div className="profile-container max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"  // Replace with actual image URL
        alt="Profile"
        className="profile-image w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full mx-auto mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <h1 className="profile-heading text-lg sm:text-xl md:text-2xl font-bold text-center hover:text-blue-500 transition duration-300 ease-in-out">
        John Doe
      </h1>
      <p className="profile-description text-sm sm:text-base md:text-lg text-center text-gray-700">
        Software Developer | Tech Enthusiast
      </p>
    </div>
  );
};

export default UserProfile;
