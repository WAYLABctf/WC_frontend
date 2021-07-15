import React from 'react';
import "./Topbar.css"

class Topbar extends React.Component {
	render() {
        const LogoUrl="../../images/wlogo_back.png";
    	return (
    		<div className="topbar">
                <ul>
                    <li>
                        {/* <img src={LogoUrl} ></img> */}
                        <a href="/">Waylab</a>
                    </li>
                    <li>
                        <a href="/chall">Challenges</a>
                    </li>
                    <li>
                        <a href="/scoreboard">Scoreboard</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/signup">Signup</a>
                    </li>
                    <li>
                       <a href="/user">User</a>
                    </li>
                </ul>
        	</div>
    	)
    }
}

export default Topbar;