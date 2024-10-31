import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const EmotionDashboard = () => {
  // Mock data for emotion analysis
  const emotionData = [
    { time: '0:00', confidence: 75, stress: 25, engagement: 80 },
    { time: '0:05', confidence: 65, stress: 35, engagement: 75 },
    { time: '0:10', confidence: 70, stress: 30, engagement: 85 },
    { time: '0:15', confidence: 80, stress: 20, engagement: 90 },
    { time: '0:20', confidence: 85, stress: 15, engagement: 95 },
  ];

  const EmotionMetricCard = ({ title, value, icon, color }) => (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        {icon}
        <Typography variant="h6" sx={{ ml: 1 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ color }}>
        {value}%
      </Typography>
    </Paper>
  );

  return (
    <Box>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <EmotionMetricCard
            title="Confidence Level"
            value={85}
            icon={<SentimentSatisfiedAltIcon color="primary" />}
            color="primary.main"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <EmotionMetricCard
            title="Stress Level"
            value={15}
            icon={<SentimentVeryDissatisfiedIcon color="error" />}
            color="error.main"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <EmotionMetricCard
            title="Engagement"
            value={90}
            icon={<TrendingUpIcon color="success" />}
            color="success.main"
          />
        </Grid>
      </Grid>

      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Emotion Trends
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={emotionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="confidence" stroke="#2196f3" name="Confidence" />
            <Line type="monotone" dataKey="stress" stroke="#f44336" name="Stress" />
            <Line type="monotone" dataKey="engagement" stroke="#4caf50" name="Engagement" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default EmotionDashboard; 