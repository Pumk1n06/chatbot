// src/pages/SignUpPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import { Button, TextField } from '@mui/material';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const userData = { name, email, password };
    try {
      const result = await registerUser(userData);
      if (result.message === 'User registered successfully') {
        navigate('/login');
      } else {
        setError(result.message || 'Registration failed');
      }
    } catch (error) {
      setError('Something went wrong, please try again later');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
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
      <Button onClick={handleRegister} variant="contained" color="primary">
        Register
      </Button>
    </div>
  );
};

export default SignUpPage;
