import { configureStore } from '@reduxjs/toolkit';
import {toDoReducer} from './reducers'; // Assuming you have separate reducer files

const store = configureStore({
  reducer: toDoReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
