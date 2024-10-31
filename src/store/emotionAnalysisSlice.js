import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentEmotions: {
    confidence: 85,
    stress: 15,
    engagement: 90,
  },
  emotionHistory: [
    { time: '0:00', confidence: 75, stress: 25, engagement: 80 },
    { time: '0:05', confidence: 65, stress: 35, engagement: 75 },
    { time: '0:10', confidence: 70, stress: 30, engagement: 85 },
    { time: '0:15', confidence: 80, stress: 20, engagement: 90 },
    { time: '0:20', confidence: 85, stress: 15, engagement: 95 },
  ],
};

const emotionAnalysisSlice = createSlice({
  name: 'emotionAnalysis',
  initialState,
  reducers: {
    updateCurrentEmotions: (state, action) => {
      state.currentEmotions = { ...state.currentEmotions, ...action.payload };
    },
    addEmotionDataPoint: (state, action) => {
      state.emotionHistory.push(action.payload);
    },
  },
});

export const { updateCurrentEmotions, addEmotionDataPoint } = emotionAnalysisSlice.actions;
export default emotionAnalysisSlice.reducer; 