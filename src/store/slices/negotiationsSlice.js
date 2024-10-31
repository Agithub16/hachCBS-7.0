import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeNegotiations: []
};

export const negotiationsSlice = createSlice({
  name: 'negotiations',
  initialState,
  reducers: {}
});

export default negotiationsSlice.reducer; 