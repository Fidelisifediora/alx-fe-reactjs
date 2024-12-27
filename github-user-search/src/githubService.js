/* eslint-disable no-unused-vars */
import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  // Return user data to be used in the Search component
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};

export default { fetchUserData };



