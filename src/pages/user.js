import axios from 'axios';
import { Component } from 'react';
import "./user.css";


class User extends Component{
    state={
        loading:false,
        list:[]
    };

    get_info= async ()=> {
            axios
                .get("/api/get-info")
                .then(({ data }) =>{
                    this.setState({
                        loading:true,
                        list:data
                    })
                }
                )
                .catch(function (error){
                          alert("server error!, please contact to admin");
                      })
    }
    componentDidMount(){
        this.get_info();
    }
    render()
    {
        const { nickname,rank,score } = this.state.list;
        return (
            <div className="container">
                <div className="user">
                    <ul>
                        <li>name : {nickname}</li>
                        <li>rank : {rank}</li>
                        <li>score : {score}</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default User;