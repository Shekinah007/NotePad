import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./features/components/Home";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./features/components/Navbar";
import Note from "./features/components/Note";
import EditNote from "./features/components/EditNote";

{
  /* <img src={logo} className="App-logo" alt="logo" /> */
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/createNote">
            <Note />
          </Route>
          <Route exact path="/editNote/:id">
            <EditNote />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
