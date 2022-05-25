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
        onClick={() => {
          dispatch(deleteNote(note.id));
        }}
      >
        <img className="deleteButton" src={Delete}></img>
      </span>
      {/* <br /> */}
    </article>
  ));

  return (
    <div className="Home">
      <Navbar />
      <Link to="/createNote" className="newNoteButton">
        <img className="addNoteButton" src={Plus}></img>
      </Link>
      {noteList}
    </div>
  );
};

export default Home;
