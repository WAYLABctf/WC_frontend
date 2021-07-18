import './App.css';
import React, { Component } from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import { Main, Login, Scoreboard, Signup, Chall, User ,Confirm,ErrorPage } from "../pages";
import Topbar from "../components/Topbar"
const axios = require('axios')

// Thank you for lahuman

class App extends Component {
  state={
    loading:false,
    isLogin:false
  }
  LoginCheck= async () => {
    axios
    .get("/api/isLogin")
    .then(()=>{
      this.setState({
        loading:true,
        isLogin:true
      })
    })
    .catch(()=>{
      this.setState({
        loading:true,
        isLogin:false
      })
    })
  }
  componentDidMount(){
    this.LoginCheck();
  }
  render(){
    console.log(this.state.isLogin)
    return (
      <div className="container">
        <Topbar isLogin={this.state.isLogin}  />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/scoreboard" exact={true} component={Scoreboard} />
          <Route path="/signup" exact={true} component={Signup} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/confirm" exact={true} component={Confirm} />
          {this.state.isLogin?(
            <Switch>
              <Route path="/chall" exact={true} component={Chall} />
              <Route path="/user" exact={true} component={User} />
            </Switch>
          ):(
            <Switch>
              <Route path="/chall" exact={true} component={Login} />
              <Route path="/user" exact={true} component={Login} />
            </Switch>
          ) }
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;