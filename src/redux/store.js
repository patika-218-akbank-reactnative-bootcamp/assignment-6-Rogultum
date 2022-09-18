/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './slicer/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
