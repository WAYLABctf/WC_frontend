import axios from 'axios';
import React from 'react';
import Field from "../components/Field"
import qs from 'qs';

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
        <Field ref={usernameRef} label="Username: " type="text" />
        <Field ref={nicknameRef} label="Nickname: " type="text" />
        <Field ref={emailRef} label="Email: " type="test" placeholder="onlye@dimigo.hs.kr"/>
        <Field ref={passwordRef} label="Password: " type="password" />
        <div>
          <button type="submit">Submit</button>
        </div>
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
              alert("Verification email sent 💛\nCheck your email please.");
              document.location.href="/login";
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
        <div>
          <h1>Signup page</h1>
          <Form onSubmit={handleSubmit} />
        </div>
      );
};

export default Signup;