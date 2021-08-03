import React, { Component } from 'react';
import Field from '../components/Field';
import Modal from '../components/Modal';
import qs from 'qs';
import axios from 'axios';
import './chall.css';
// import './chall-event.js'

const Form = ({onSubmit}) => {
    const flagRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = qs.stringify({
            'flag': flagRef.current.value,
        });
        onSubmit(data);
    };

    return (
      <form onSubmit={handleSubmit} autocomplete="off">
        <div className="form_group">
          <input ref={flagRef} type="text" className="form_field" placeholder="flag" name="flag_input" id="flag_input" required/>
          <label for="flag_input" className="form_label">Flag Value</label>
        </div>
      </form>
    );
};

class Chall extends Component {
  state = {
    loading:false,
    challs:[],
  };

  get_challs= async () => {
    axios
      .post("/api/get-challs")
      .then(({ data }) => {
        this.setState({
          loading:true,
          challs:data['result'],
          _id:data['_id']
        })
      })
      .catch(() => {
        alert("server error!, please contact to admin");
      })
  }
  componentDidMount(){
    this.get_challs();
  }

  close_blinder = (e) => {
    if(e.target == e.currentTarget) {
      let blinder = document.querySelector(".blinder");
      blinder.classList.remove("on", "off");
      blinder.classList.add("off");
      document.querySelector("#modal_card > .mc_title").innerHTML = '';
      document.querySelector("#modal_card > .mc_description").innerHTML = '';
      document.querySelector("#modal_card > .mc_field").innerHTML = '';
      document.querySelector("#modal_card > .mc_pts").innerHTML = '';
      document.querySelector("#modal_card > .mc_author").innerHTML = '';
      document.querySelector("#modal_card > .mc_url").innerHTML = '';
      document.querySelector("#modal_card > .mc_download_link").href = '';
    }
  }

  handleSubmit = async data => {     
    await axios.post("/api/auth-flag",data)
      .then(function (response){
        const res=response['data']['msg'];
        const name=response['data']['probname'];
        switch(res){
            case "Correct Flag":
                alert(name+" solved 💛");
                window.location.href = '/chall';
                break;
            case "already solved":
                alert("already solved!");
                window.location.href = '/chall';
                break;
            case "Wrong flag":
                alert("Wrong flag..");
                window.location.href = '/chall';
                break;
            case "expiration":
                alert("만료된 문제입니다.");
                window.location.href = '/chall';
                break;
            default:
                alert("error");
        }
      }).catch(function (error){
          alert("server error!, please contact to admin");
      })
    };
    render(){
      // const chall_list=this.state.challs[i].map((this.state.challs,i)=><Modal show={ this.state.modalOpen } close={ this.closeModal } open={ this.modalOpen } title={this.state.challs[i].probname} 
      // field={this.state.challs[i].field} pts={this.state.challs[i].pts} descriptions={this.state.challs[i].descriptions} author={this.state.challs[i].author} url={this.state.challs[i].url} google_driver={this.state.challs[i].google_driver}></Modal>);

      let chall_list=[];
      let temp_list=[];
      // const chall_list=this.state.challs[i].map((this.state.challs,i)=>
      // {
      // if(i%4==0&&i!=0)
      //   return <Modal idx={ i }close={ this.closeModal } open={ this.openModal } title={this.state.challs[i].probname} 
      // field={this.state.challs[i].field} pts={this.state.challs[i].pts} descriptions={this.state.challs[i].descriptions} author={this.state.challs[i].author} url={this.state.challs[i].url} google_driver={this.state.challs[i].google_driver}></Modal>
      // else{
      //   chall_list.push(temp_list);
      //   temp_list=[];
      // }
      
      // );
      for(var i=0;i<=this.state.challs.length;i++){
        if(this.state.challs.length==i){
          chall_list.push(temp_list);
        }else if((i+1)%4==0){
          temp_list.push(<Modal idx  = {i} key={ i } title={this.state.challs[i].probname} 
            field={this.state.challs[i].field} pts={this.state.challs[i].pts} _id={this.state._id} solver={this.state.challs[i].solver} challs={this.state.challs}></Modal>);
            chall_list.push(temp_list);
            temp_list=[];
          }else{
            temp_list.push(<Modal idx = {i} key={ i } title={this.state.challs[i].probname} 
            field={this.state.challs[i].field} pts={this.state.challs[i].pts} _id={this.state._id} solver={this.state.challs[i].solver} challs={this.state.challs}></Modal>);
        }
      }
      for(var i=0;i<chall_list.length;i++){
        chall_list[i]=(
          <div className="column">
            {chall_list[i]}
          </div>
        )
      }
      return (
        <div className="container_ch">
          <Form onSubmit={this.handleSubmit} style="color:black;" />
          <div className="ch_container">
            {chall_list}
          </div>
          <div className="blinder" onClick={this.close_blinder}>
            <div id="modal_card">
              <span className="mc_title"></span>
              <span className="mc_description"></span>
              <span className="mc_field"></span>
              <span className="mc_pts"></span>
              <span className="mc_author"></span>
              <span className="mc_url"></span>
              <a className="mc_download_link" target="_blank">문제파일</a>
            </div>
          </div>
        </div>
        )
    }

};

export default Chall;