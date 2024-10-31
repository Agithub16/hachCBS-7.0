import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentEmotions } from '../store/emotionAnalysisSlice';

export const useEmotionAnalysis = (videoRef) => {
  const dispatch = useDispatch();
  const [emotions, setEmotions] = useState({
    confidence: 0,
    stress: 0,
    engagement: 0,
  });

  useEffect(() => {
    const analyzeEmotions = async () => {
      // Mock emotion analysis
      const mockAnalysis = {
        confidence: Math.random() * 100,
        stress: Math.random() * 100,
        engagement: Math.random() * 100,
      };

      setEmotions(mockAnalysis);
      dispatch(updateCurrentEmotions(mockAnalysis));
    };

    const interval = setInterval(analyzeEmotions, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return emotions;
}; 