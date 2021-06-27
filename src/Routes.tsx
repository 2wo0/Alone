import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
      </Switch>
    </Router>
  );
}
