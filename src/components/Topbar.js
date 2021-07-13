import React from 'react';
import "./Topbar.css"

class Topbar extends React.Component {
	render() {
    	return (
    		<div className="topbar">
                <ul>
                    <li>
                        Waylab
                    </li>
                    <li>
                        Challenges
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
                    <li>
                        Info
                    </li>
                </ul>
        	</div>
    	)
    }
}

export default Topbar;