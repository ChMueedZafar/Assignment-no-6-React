import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './feactures/StudentSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});
