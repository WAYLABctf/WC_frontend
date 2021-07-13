import './App.css';
import React, { Component } from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import { Main, Login, Scoreboard, Signup, Chall, User ,Confirm } from "../pages";
import Topbar from "../components/Topbar"
class App extends Component {
  render() {
    return (
      <div className="container">
        <Topbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/scoreboard" exact={true} component={Scoreboard} />
          <Route path="/chall" exact={true} component={Chall} />
          <Route path="/signup" exact={true} component={Signup} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/user" exact={true} component={User} />
          <Route path="/confirm" exact={true} component={Confirm} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
