import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'; // Updated to CheckCircle

const SuccessPage = () => {
  return (
    <Container maxWidth="sm" className="registration-container">
      <Typography variant="h4" gutterBottom>Success!</Typography>

      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <CheckCircle sx={{ fontSize: 60, color: 'green', mb: 2 }} /> {/* Changed to CheckCircle */}
        <Typography variant="h6">Your Chatbot is Successfully Integrated!</Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          You can now explore the admin panel or start chatting with your chatbot on your website.
        </Typography>
      </Box>

      <Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => window.location.href = '/admin-panel'}
          fullWidth
          sx={{ mb: 2 }}
        >
          Explore Admin Panel
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.href = '/chatbot'}
          fullWidth
        >
          Start Talking to Your Chatbot
        </Button>
      </Box>
    </Container>
  );
};

export default SuccessPage;
