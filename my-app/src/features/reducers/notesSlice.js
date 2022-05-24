import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = [
  {
    id: nanoid(),
    title: "Greetings",
    content: "Hello, World.",
  },
];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
    deleteNote: {
      reducer(state, action) {
        for (let i = 0; i < state.length; i++) {
          if (state[i].id === action.payload) {
            state.splice(i, 1);
          }
        }
      },
    },
  },
});

export const allNotes = (state) => state.notes;
export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
