import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Typography,
  Box,
} from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const QuickActions = () => {
  const actions = [
    {
      icon: <VideoCallIcon color="primary" />,
      primary: 'Start Video Call',
      secondary: 'Begin a new negotiation session',
    },
    {
      icon: <AssessmentIcon color="primary" />,
      primary: 'Generate Report',
      secondary: 'Create analysis report',
    },
    {
      icon: <ChatIcon color="primary" />,
      primary: 'Chat History',
      secondary: 'View previous conversations',
    },
    {
      icon: <CalendarTodayIcon color="primary" />,
      primary: 'Schedule Meeting',
      secondary: 'Plan your next negotiation',
    },
  ];

  return (
    <Box>
      <List>
        {actions.map((action, index) => (
          <React.Fragment key={action.primary}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{action.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">{action.primary}</Typography>
                  }
                  secondary={action.secondary}
                />
              </ListItemButton>
            </ListItem>
            {index < actions.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default QuickActions; 