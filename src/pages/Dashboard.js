import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => navigate('/tactics')}
        sx={{ mr: 2 }}
      >
        Go to Tactics
      </Button>
      <Button 
        variant="contained" 
        onClick={() => navigate('/simulation')}
        sx={{ mr: 2 }}
      >
        Go to Simulation
      </Button>
      <Button 
        variant="contained" 
        onClick={() => navigate('/settings')}
      >
        Go to Settings
      </Button>
    </Box>
  );
};

export default Dashboard; 