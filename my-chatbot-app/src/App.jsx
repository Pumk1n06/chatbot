import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router v6
import HomePage from '../src/pages/HomePage'; // Home page for app intro
import RegistrationPage from '../src/pages/RegistrationPage';
import LoginPage from '../src/pages/LoginPage';
import OrganisationSetupPage from '../src/pages/OrganisationSetupPage';
import ChatbotIntegrationPage from '../src/pages/ChatbotIntegrationPage';
import SuccessPage from '../src/pages/SuccessPage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Wrap your application inside Router */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page as the landing page */}
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/setup-organisation" element={<OrganisationSetupPage />} />
          <Route path="/chatbot-integration" element={<ChatbotIntegrationPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
