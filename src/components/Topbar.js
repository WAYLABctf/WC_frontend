import React from 'react';
import "./Topbar.css"


function Topbar (probs) {
    const isLogin=probs.isLogin;
    	return (
    		<div className="topbar">
                <ul>
                    <li>
                        <a href="/">Waylab</a>
                    </li>
                    <li>
                        <a href="/chall">Challenges</a>
                    </li>
                    <li>
                        <a href="/scoreboard">Scoreboard</a>
                    </li>
                    {isLogin ?(
                    <>
                    <li>
                       <a href="/user">User</a>
                    </li>
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                    </>
                    ):(
                    <>
                    <li>
                        <a href="/signup">Signup</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    </>
                    )
                    }
                </ul>
        	</div>
    	)
}

export default Topbar;