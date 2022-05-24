import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addNote } from "../reducers/notesSlice";

const Note = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(addNote(title, content));
    history.push("/");
  };

  return (
    <div className="Note">
      <form>
        <label htmlFor="title"></label>
        <input
          type="text"
          value={title}
          placeholder="Title/Header"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content"></label>
        <textarea
          value={content}
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Note;
