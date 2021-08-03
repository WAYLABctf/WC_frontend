import React from 'react';
import "./main.css";
import discord from "../image/pngegg.png";
import landing from "./landing";

function Main(){
    return (
        <div className="container">
            <span id="main_text"></span>
            <span className="cont"></span>
            {/* <div id="time"><span id="day">--</span> : <span id="hour">--</span> : <span id="minutes">--</span> : <span id="sec">--</span></div> */}
            <a target="_blank" className="discord_l" href="https://discord.gg/pwK8eer3uB"><img src={discord} alt=""/><span>바로가기</span></a>
            <span className="estoregg">Design by. OMH</span>
        </div>
    )
};

export default Main;