import React from 'react';
import "./RankCard.css";

const RankCard = ( props ) => {
    const {rank,nickname, pts, auth_time}=props;
    return (
        <tr className="RankCard">
            <td className="rank">{rank===1 ? "🥇" : rank===2 ? "🥈" : rank===3 ? "🥉" : rank}</td> 
            <td className="nick">{nickname}</td> 
            <td className="score">{pts}</td> 
            <td className="auth">{auth_time}</td> 
        </tr>
    )
}
export default RankCard;