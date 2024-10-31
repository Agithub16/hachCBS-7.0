import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Negotiator',
    activeNegotiations: 3,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer; 