import axios from 'axios';
import { useEffect, setState, Component } from 'react';



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
            <div>
            <h1>User Page</h1>
            <ul>
                <li>{nickname}</li>
                <li>{rank}</li>
                <li>{score}</li>
            </ul>
            </div>
        )
    }
};

export default User;