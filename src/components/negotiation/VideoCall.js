import React, { useRef, useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useEmotionAnalysis } from '../../hooks/useEmotionAnalysis';

const VideoCall = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const emotions = useEmotionAnalysis(localVideoRef);

  useEffect(() => {
    // Initialize webcam
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, bgcolor: 'grey.900', height: '70vh' }}>
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            style={{ width: '100%', height: '100%' }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, height: '30vh' }}>
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            style={{ width: '100%', height: '100%' }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VideoCall; 