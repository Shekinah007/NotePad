import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allNotes } from "../reducers/notesSlice";
import { useParams } from "react-router";
import { deleteNote } from "../reducers/notesSlice";

const Home = () => {
  const dispatch = useDispatch();
  //   const notes = useSelector((state) => state.notes);
  const notes = useSelector(allNotes);
  console.log(notes);
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
  //   const handleDelete = () => {
  //     dispatch(deleteNote(note.id));
  //   };

  const noteList = notes.map((note) => (
    <article className="notePreview" key={note.id}>
      <Link to={`/editNote/${note.id}`}>
        <div className="dateAndTime">
          Date: {note.date}
          <br />
          Time: {note.time}
        </div>
        <h3>{note.title}</h3>

        <hr />
      </Link>
      <button
        onClick={() => {
          dispatch(deleteNote(note.id));
        }}
      >
        Delete
      </button>
      <br />
    </article>
  ));

  return (
    <div>
      <Link to="/createNote" className="newNoteButton">
        New Note
      </Link>
      {noteList}
    </div>
  );
};

export default Home;
