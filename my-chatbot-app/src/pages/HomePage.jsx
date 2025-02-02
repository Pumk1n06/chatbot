// src/pages/HomePage.js

import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Chatbot Setup</h1>
      <p>Your chatbot integration starts here. Let's begin!</p>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/register')}
          style={{ marginRight: '10px' }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/login')}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
