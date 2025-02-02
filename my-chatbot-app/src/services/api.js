// src/api.js

const API_URL = 'http://localhost:5000/api';  // Your backend API URL

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    return await response.json();
  } catch (error) {
    console.error("Registration error", error);
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    return await response.json();
  } catch (error) {
    console.error("Login error", error);
  }
};

// Frontend call to setup organization
export const setupOrganisation = async (orgData, token) => {
  const response = await fetch(`${API_URL}/user/organisation-setup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Include the token
    },
    body: JSON.stringify(orgData),  // Send the organization data in the request body
  });
  return response.json();
};
