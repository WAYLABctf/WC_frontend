import React from 'react';
import "./Topbar.css"
import waylabCTF from "../image/waylabctf_logo.png"

function Topbar (props) {
    const isLogin=props.isLogin;
    const pwd=props.pwd;
    return (
        <div className="topbar">
            <a href="/" className="logo"><img src={waylabCTF} alt="" />WAYLAB CTF</a>
            <ul>
                <li><a className={pwd.search("/chall")!==-1 ? "active" : null} href="/chall">Challenges</a></li>
                <li><a className={pwd.search("/scoreboard")!==-1 ? "active" : null} href="/scoreboard">Scoreboard</a></li>
                {isLogin ?(
                <>
                <li><a className={pwd.search("/user")!==-1 ? "active" : null} href="/user">User</a></li>
                <li><a href="/api/logout">Logout</a></li>
                </>
                ):(
                <>
                <li><a className={pwd.search("/signup")!==-1 ? "active" : null} href="/signup">Signup</a></li>
                <li><a className={pwd.search("/login")!==-1 ? "active" : null} href="/login">Login</a></li>
                </>
                )
                }
            </ul>
        </div>
    )
}

export default Topbar;