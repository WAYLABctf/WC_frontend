import React from 'react';
import axios from 'axios';
import Field from '../components/Field';
import qs from 'qs';
import './login.css';
import waylabCTF from "../image/waylabctf_logo1.png"

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = qs.stringify({
            'username': usernameRef.current.value,
            'password': passwordRef.current.value
        });
        onSubmit(data);
    };
    return (
        <form onSubmit={handleSubmit} >
            <Field ref={usernameRef} label="Username" type="text" placeholder="Username" />
            <Field ref={passwordRef} label="Password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

function Login(){
    const handleSubmit = async data => {
        await axios.post("/api/login",data)
          .then(function (response){
              console.log(response);
            const res=response['data'];
            switch(res){
                case "not_registered":
                    alert("Not registered..");
                    break;
                case "wrong_password":
                    alert("wrong_password..");
                    break;
                case "success":
                    document.location.href="/user";
                    break;
                case "Please verify your email..":
                    alert("Please verify your email");
                    break;
                default:
                    alert("error");
            }

          }).catch(function (error){
              console.log(error)
              alert("server error!, please contact to admin");
          })
    };
    return (
        <div className="container">
            <div className="login_container">
                <span>Login</span>
                <div className="login_box">
                    <div className="login_form">
                        <Form onSubmit={handleSubmit} />
                    </div>
                    <div className="logo_container">
                        <img src={waylabCTF} alt="" className="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;