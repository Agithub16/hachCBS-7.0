import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Chip,
  Box,
  Paper,
  LinearProgress,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';

const ActiveNegotiations = () => {
  const negotiations = [
    {
      id: 1,
      title: 'Contract Negotiation with TechCorp',
      status: 'In Progress',
      progress: 65,
      lastUpdate: '2 hours ago',
    },
    {
      id: 2,
      title: 'Merger Discussion with StartupX',
      status: 'Pending',
      progress: 30,
      lastUpdate: '5 hours ago',
    },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Active Negotiations
      </Typography>
      <List>
        {negotiations.map((negotiation) => (
          <ListItem
            key={negotiation.id}
            sx={{ mb: 2, bgcolor: 'background.paper', borderRadius: 1 }}
          >
            <ListItemAvatar>
              <Avatar>
                <BusinessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle1">{negotiation.title}</Typography>
                  <Chip 
                    label={negotiation.status} 
                    color={negotiation.status === 'In Progress' ? 'primary' : 'warning'}
                    size="small"
                  />
                </Box>
              }
              secondary={
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Last updated: {negotiation.lastUpdate}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress variant="determinate" value={negotiation.progress} />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {negotiation.progress}%
                    </Typography>
                  </Box>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ActiveNegotiations; 