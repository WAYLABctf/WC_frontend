import React, {Component} from 'react';
import axios from 'axios';
import RankCard from '../components/RankCard';
import './scoreboard.css';

class Scoreboard extends Component {
    state={
      loading:false,
      ranks:[]
    };
    get_ranks= async () => {
      axios
      .get("/api/scoreboard")
      .then(({data})=>{
        this.setState({
          loading:true,
          ranks:data
        })
      })
      .catch(()=>{
        alert("server error!, please contact to admin");
      })
    }
    componentDidMount(){
      this.get_ranks();
    }
    render(){
      return (
          <div className="container">
          <table className="scoreboard_table">
            <thead>
              <tr>
                <td>Rank</td>
                <td>Nickname</td>
                <td>Score</td>
                <td>Last Auth Time</td>
              </tr>
            </thead>
            <tbody>
            {
            this.state.ranks.map((info,i) =>{
              return(
                <RankCard rank={info.rank} nickname={info.nickname} pts={info.pts} auth_time={info.auth_time} />
                )
              })
            }
            </tbody>
          </table>
        </div>
      );
    }
  }
  
export default Scoreboard;