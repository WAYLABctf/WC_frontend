import axios from 'axios';
import React from 'react';
import Field from "../components/Field"
import qs from 'qs';
import './signup.css'
import waylabCTF from "../image/waylabctf_logo1.png"

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const nicknameRef = React.useRef();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = qs.stringify({
            'username': usernameRef.current.value,
            'nickname': nicknameRef.current.value,
            'email': emailRef.current.value,
            'password': passwordRef.current.value
        });
        onSubmit(data);
    };
    return (
      <form onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username" name="username" type="text" placeholder="Username" />
        <Field ref={nicknameRef} label="Nickname" name="nickname" type="text" placeholder="Nickname" />
        <Field ref={emailRef} label="Email" name="email" type="test" placeholder="example@dimigo.hs.kr"/>
        <Field ref={passwordRef} label="Password" name="password" type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    );
};

function Signup(){
    const handleSubmit = async data => {
      await axios.post("/api/signup",data)
        .then(function (response){
          const res=response['data'];
          console.log(response);
          switch(res){
            case "email":
              alert("email exist..");
              break;
            case "username":
              alert("username exist..");
              break;
            case "nickname":
              alert("nickname exist..");
              break;
            case "Verification email sent!":
              document.querySelector(".blinder").classList.add("on");
              let ss = document.querySelector(".status_span");
              let dm = '.'
              setInterval(() => {
                ss.innerHTML = `Account verification${dm}`;
                dm += '.';
                if(dm.length > 3) dm = '.';
              }, 500);
              alert("Verification email sent 💛\nCheck your email please.");
              let user_email = `email=${document.querySelector("form").email.value}`;
              let checking = setInterval(async () => {
                await axios.post("/api/verify_check", user_email)
                  .then((response1) => {
                    if(response1['data'] == 'success') {
                      alert("Email Verification Success!");
                      document.location.href="/login";
                    }
                  }).catch((err) => {
                    console.log(err);
                    alert("Email Verification checking error!");
                    clearInterval(checking);
                  })
              }, 3000);
              break;
            case "Only use a dimigo email.":
              alert("Only dimigo email");
              break;
            default:
              alert("error");
          }
        }).catch(function (error){
            alert("server error!, please contact to admin");
        })
    };
    return (
        <div className="container">
          <div className="signup_container">
            <span>Sign up</span>
            <div className="signup_box">
              <div className="signup_form">
                <Form onSubmit={handleSubmit} />
              </div>
              <div className="logo_container">
                <img src={waylabCTF} alt="" className="logo" />
              </div>
            </div>
          </div>
          <div className="blinder">
            <span className="status_span"></span>
          </div>
        </div>
      );
};

export default Signup;