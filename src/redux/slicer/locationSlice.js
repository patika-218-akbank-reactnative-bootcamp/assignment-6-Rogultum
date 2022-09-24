/* eslint-disable no-param-reassign */

/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

// const initialStateValue = { longitude: '', latitude: '' };

export const locationSlice = createSlice({
  name: 'location',
  initialState: { value: [] },
  reducers: {
    addLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addLocation } = locationSlice.actions;

export default locationSlice.reducer;
