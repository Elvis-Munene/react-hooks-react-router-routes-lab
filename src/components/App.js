import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Actors from "../components/Actors";
import Directors from "../components/Directors";
import Movies from "../components/Movies";

function App() {
  return (
  <div>
    <NavBar/>
    <Switch>

    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/movies">
    <Movies />
    </Route>

    <Route path="/directors">
    <Directors />
    </Route>

    <Route path="/actors">
   <Actors />
   </Route>

    </Switch>
  </div>
  )
}

export default App;
