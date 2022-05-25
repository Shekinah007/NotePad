import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allNotes } from "../reducers/notesSlice";
import { useParams } from "react-router";
import { deleteNote } from "../reducers/notesSlice";
import Plus from "../images/add_circle_black_48dp.svg";
import Delete from "../images/delete_black_24dp.svg";
import Calendar from "../images/calendar_month_black_24dp.svg";
import Clock from "../images/schedule_black_24dp.svg";

const Home = () => {
  const dispatch = useDispatch();
  //   const notes = useSelector((state) => state.notes);
  const notes = useSelector(allNotes);
  console.log(notes);

  //   const handleDelete = () => {
  //     dispatch(deleteNote(note.id));
  //   };

  const noteList = notes.map((note) => (
    <article className="notePreview" key={note.id}>
      <Link to={`/editNote/${note.id}`}>
        <div className="dateAndTime">
          <span className="imageAndDate">
            <img className="clockAndCalendar" src={Calendar}></img>
            <span>{note.date}</span>
          </span>

          <span className="imageAndDate">
            <img className="clockAndCalendar" src={Clock}></img>
            <span> {note.time}</span>
          </span>
        </div>
        <h3>{note.title}</h3>

        <hr />
      </Link>
      <span
        // className="deleteButton"
        onClick={() => {
          dispatch(deleteNote(note.id));
        }}
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg> */}
        <img className="deleteButton" src={Delete}></img>
      </span>
      <br />
    </article>
  ));

  return (
    <div>
      <Link to="/createNote" className="newNoteButton">
        <img className="addNoteButton" src={Plus}></img>
      </Link>
      {noteList}
    </div>
  );
};

export default Home;
