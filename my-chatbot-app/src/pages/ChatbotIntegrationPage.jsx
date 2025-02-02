// src/pages/ChatbotIntegrationPage.js

import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ChatbotIntegrationPage = () => {
  const [integrationStatus, setIntegrationStatus] = useState(false);
  const navigate = useNavigate();

  const testChatbot = () => {
    setIntegrationStatus(true);  // Simulate successful integration
  };

  const integrateChatbot = () => {
    alert('Chatbot code integrated!');
    navigate('/success');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Chatbot Integration</h2>
      <Button onClick={testChatbot} variant="contained" color="primary" style={{ marginBottom: '20px' }}>
        Test Chatbot
      </Button>

      {integrationStatus && (
        <>
          <h3>Chatbot integration successful!</h3>
          <Button onClick={integrateChatbot} variant="contained" color="primary">
            Integrate Chatbot on Your Website
          </Button>
        </>
      )}
    </div>
  );
};

export default ChatbotIntegrationPage;
