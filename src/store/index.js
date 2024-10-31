import { configureStore } from '@reduxjs/toolkit';
import negotiationsReducer from './slices/negotiationsSlice';
import userReducer from './slices/userSlice';
import emotionAnalysisReducer from './slices/emotionAnalysisSlice';

export const store = configureStore({
  reducer: {
    negotiations: negotiationsReducer,
    user: userReducer,
    emotionAnalysis: emotionAnalysisReducer,
  },
});