import './App.css';
import React, { Component } from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import { Main, Login, Scoreboard, Signup, Chall, User ,Confirm } from "../pages";
import Topbar from "../components/Topbar"
const axios = require('axios')

// Thank you for lahuman
const sleep = (ms) => {
  return new Promise(resolve=>{
      setTimeout(resolve,ms)
  })
}

const init = async () => {
  for (let i=0; i<5; i++){
      await sleep(1000);
  }
}

let IsLogin = false;

(function LoginCheck(){
  try {
      const res = new Promise((resolve, reject) => {
          axios.get("/api/isLogin")
          .then(function (response){
              IsLogin = true;
              resolve(response);
          }
          ).catch(function (error){
              IsLogin = false;
              reject(error);
          });
      });
      return res;
  } catch {
      return false;
  }
})();
init();

class App extends Component {
  render() {
    return (
      <div className="container">
        <Topbar isLogin={ setTimeout(()=>console.log(IsLogin),2000) } />
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