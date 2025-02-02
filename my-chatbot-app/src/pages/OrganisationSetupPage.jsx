// src/pages/OrganisationSetupPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setupOrganisation } from '../services/api';
import { Button, TextField } from '@mui/material';

const OrganisationSetupPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleOrganisationSetup = async () => {
    const orgData = { companyName, companyWebsite, companyDescription };
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const result = await setupOrganisation(orgData, token);
      if (result.message === 'Organization setup successful') {
        navigate('/chatbot-integration');
      } else {
        setError(result.message || 'Organization setup failed');
      }
    } catch (error) {
      setError('Something went wrong, please try again later');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Organization Setup</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <TextField
        label="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Company Website"
        value={companyWebsite}
        onChange={(e) => setCompanyWebsite(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Company Description"
        value={companyDescription}
        onChange={(e) => setCompanyDescription(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button onClick={handleOrganisationSetup} variant="contained" color="primary">
        Set Up Organization
      </Button>
    </div>
  );
};

export default OrganisationSetupPage;
