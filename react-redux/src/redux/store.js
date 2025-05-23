import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './tasksSlice';
import filtersTaskSlice from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
    filters: filtersTaskSlice,
  },
});
