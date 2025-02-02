// src/pages/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';  // Import your login API service
import { Button, TextField } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userData = { email, password };
    try {
      const result = await loginUser(userData);  // Call login API
      if (result.token) {
        // If login successful, store the token in localStorage and navigate
        localStorage.setItem('authToken', result.token);
        navigate('/setup-organisation');  // Navigate to organization setup
      } else {
        // Show error message if login fails
        setError(result.message || 'Login failed');
      }
    } catch (error) {
      // Catch and display any errors from the API or network
      setError('Something went wrong, please try again later');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button onClick={handleLogin} variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
