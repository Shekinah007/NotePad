import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import notesReducer from "../features/reducers/notesSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    notes: notesReducer,
  },
});
