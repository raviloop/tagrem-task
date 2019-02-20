import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AddUser from "./AddUser";
import Users from "./Users";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add_user" component={AddUser} />
      <Route path="/users" component={Users} />
    </Switch>
  </main>
);

export default Main;
