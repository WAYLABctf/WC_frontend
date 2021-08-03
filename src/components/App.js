import './App.css';
import React, { Component } from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import { Main, Login, Scoreboard, Signup, Chall, User ,Confirm } from "../pages";
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
    return (
      <>
        <Topbar isLogin={this.state.isLogin} pwd={document.URL} />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/scoreboard" exact={true} component={Scoreboard} />
          <Route path="/signup" exact={true} component={Signup} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/confirm/:token" exact={true} component={Confirm} />
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
      </>
    );
  }
}

export default App;