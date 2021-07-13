import './App.css';
import React, { Component } from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import { Main, Signin, Scoreboard, Signup, Chall } from "../pages";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/scoreboard" exact={true} component={Scoreboard} />
          <Route path="/chall" exact={true} component={Chall} />
          <Route path="/signup" exact={true} component={Signup} />
          <Route path="/signin" exact={true} component={Signin} />
          <Route path="/signin" exact={true} component={Signin} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
