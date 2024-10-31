import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeNegotiations: [
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
  ],
};

const negotiationsSlice = createSlice({
  name: 'negotiations',
  initialState,
  reducers: {
    addNegotiation: (state, action) => {
      state.activeNegotiations.push(action.payload);
    },
    updateNegotiation: (state, action) => {
      const index = state.activeNegotiations.findIndex(n => n.id === action.payload.id);
      if (index !== -1) {
        state.activeNegotiations[index] = action.payload;
      }
    },
  },
});

export const { addNegotiation, updateNegotiation } = negotiationsSlice.actions;
export default negotiationsSlice.reducer; 