import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Main from "./Pages/Main/Main";
import DetailList from "./Pages/DetailList/DetailList";

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/detailList" component={DetailList} />
      </Switch>
    </Router>
  );
}
