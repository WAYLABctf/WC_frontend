import React from "react";

// import "./topbar.css";

export default class topbar extends React.Component {
  render() {
    return (
      <div className="top_bar">
          <ul>
            <li>
                Waylab CTF
            </li>
            <li>
                Challenge
            </li>
            <li>
                Scoreboard
            </li>
            <li>
                Signin
            </li>
            <li>
                Signup
            </li>
          </ul>
      </div>
    );
  }
}