import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];

console.log(day, month, year, hour, minutes);

const initialState = [
  {
    id: nanoid(),
    title: "Greetings",
    content: "Hello, World.",
    date:
      new Date().getDay() +
      "-" +
      new Date().getMonth() +
      "-" +
      new Date().getFullYear(),
    time:
      new Date().getHours() +
      "-" +
      date.getMinutes() +
      "-" +
      new Date().getSeconds(),
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
            date:
              new Date().getDay() +
              "-" +
              new Date().getMonth() +
              "-" +
              new Date().getFullYear(),
            time:
              new Date().getHours() +
              "-" +
              new Date().getMinutes() +
              "-" +
              new Date().getSeconds(),
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
