import React from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const WelcomeSection = () => {
  return (
    <Paper
      sx={{
        p: 3,
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: 'white',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Welcome to AI Negotiation Assistant
          </Typography>
          <Typography variant="subtitle1">
            Your intelligent partner for successful negotiations
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          sx={{ height: 'fit-content' }}
        >
          New Negotiation
        </Button>
      </Box>
    </Paper>
  );
};

export default WelcomeSection; 