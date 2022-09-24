/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';

import locationReducer from './slicer/locationSlice';
import themeReducer from './slicer/themeSlice';
import userReducer from './slicer/userSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    location: locationReducer,
  },
});
