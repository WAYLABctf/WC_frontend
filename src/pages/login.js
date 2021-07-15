import React from 'react';
import axios from 'axios';
import Field from '../components/Field';
import qs from 'qs';

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
        <Field ref={usernameRef} label="Username: " type="text" />
        <Field ref={passwordRef} label="Password: " type="password" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
};

function Login(){
    const handleSubmit = async data => {
        await axios.post("/api/login",data)
          .then(function (response){
            const res=response['data'];
            console.log(response);
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
                default:
                    alert("error");
            }

          }).catch(function (error){
              alert("server error!, please contact to admin");
          })
    };
    return (
        <div>
            <h1>Login Page</h1>
            <Form onSubmit={handleSubmit} />
        </div>
    );
};

export default Login;