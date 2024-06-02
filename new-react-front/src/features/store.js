import { configureStore } from '@reduxjs/toolkit';
import { suivie_formation_api } from './apiSlice';

export const store = configureStore({
  reducer: {
    [suivie_formation_api.reducerPath]: suivie_formation_api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(suivie_formation_api.middleware),
});