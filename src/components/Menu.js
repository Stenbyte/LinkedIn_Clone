import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Network from "./Network";

export default function Menu() {
  return (
    <div>
      {/* <Router>
        <Switch>
          <Route exact path="/home1">
            <Home />
          </Route>
          <Route exact path="/network">
            <Network />
          </Route>
        </Switch>
      </Router> */}
      <p>Jobs</p>
      <p>Messaging</p>
      <p>Notification</p>
      <p>Work</p>
    </div>
  );
}
