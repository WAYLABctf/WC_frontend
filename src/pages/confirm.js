import React, { Component } from 'react';
import axios from 'axios';



class Confirm extends Component{
    state={
        loading:false,
      }
      Confirm= async () => {
        const token=this.props.location.pathname.split('/')[2];
        console.log(token);
        axios
        .get("/api/confirm/"+token)
        .then(()=>{
          alert("Verify Success! π\nplease go to the previous tab!");
          window.close();
        })
        .catch(()=>{
            alert("Verify Failed.. ");
            document.querySelector(".err").innerHTML = "κ΄λ¦¬μμκ² λ¬ΈμνμΈμ!";
        })
      }
      componentDidMount(){
        this.Confirm();
      }
    render(){
 
        return (
            <div className="container">
              <span className="err"></span>
            </div>
          )
    }
};

export default Confirm;