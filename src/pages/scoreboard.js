import React, {Component} from 'react';
import axios from 'axios';
import RankCard from '../components/RankCard';

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
        console.log("success");
        console.log(this.state.isLogin);
      })
      .catch(()=>{
        console.log("server error!, please contact to admin");
      })
    }
    componentDidMount(){
      this.get_ranks();
    }
    render(){
      return (
          <div>
          <h1>Scoreboard Page</h1>
          {
              this.state.ranks.map((info,i) =>{
                  return(
                      <RankCard rank={info.rank} nickname={info.nickname} pts={info.pts} auth_time={info.auth_time} />
                  )
              })
            }
        </div>
      );
    }
  }
  
export default Scoreboard;