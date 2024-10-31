import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emotions: {}
};

export const emotionAnalysisSlice = createSlice({
  name: 'emotionAnalysis',
  initialState,
  reducers: {}
});

export default emotionAnalysisSlice.reducer; 