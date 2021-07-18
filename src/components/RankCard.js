import React from 'react';
import "./RankCard.css";

const RankCard = ( props ) => {
    const {rank,nickname, pts, auth_time}=props;
    return (
        <div className="RankCard">
            <span>{rank==1 ? "👑" : rank}</span> 
            <span>{nickname}</span> 
            <span>{pts}</span> 
            <span>{auth_time}</span> 
        </div>
    )
}
export default RankCard;