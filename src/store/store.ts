import { configureStore } from '@reduxjs/toolkit';
import employReducer from '../features/employees/employSplice';

export const store = configureStore({
 reducer: {
  employees: employReducer,
 },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
