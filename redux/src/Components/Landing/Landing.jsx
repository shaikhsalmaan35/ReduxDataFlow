import React from "react";
import { AboutUs } from "../Navigition/AboutUs";
import { Fetaching } from "../Navigition/Fetaching";
import { Home } from "../Navigition/Home";
import { NavigitionBar } from "../Navigition/NavigitionBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      <Router>
        <div>
          <NavigitionBar />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/Fetching">
              <Fetaching />
            </Route>
            <Route path="">
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
