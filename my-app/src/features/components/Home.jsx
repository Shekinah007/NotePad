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

  //   const handleDelete = () => {
  //     dispatch(deleteNote(note.id));
  //   };

  const noteList = notes.map((note) => (
    <article className="notePreview">
      <Link to={`/editNote/${note.id}`} key={note.id}>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </Link>
      <button
        onClick={() => {
          dispatch(deleteNote(note.id));
        }}
      >
        Delete
      </button>
    </article>
  ));

  return (
    <div>
      <Link to="/createNote">New Note</Link>
      {noteList}
    </div>
  );
};

export default Home;
