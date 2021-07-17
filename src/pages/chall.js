import React, { useState } from 'react';
import Field from '../components/Field';
import Modal from '../components/Modal';
import qs from 'qs';
import axios from 'axios';

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
      <form onSubmit={handleSubmit} >
        <Field ref={flagRef} label="flag: " type="text" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
};

function Chall() {
    const [show, setShow] = useState(false);

    const handleModalClose = (e) => {
        setShow(false);
      };
      
      const handleModalOpen = () => {
        setShow(true);
      };

    const handleSubmit = async data => {
        await axios.post("/api/auth-flag",data)
          .then(function (response){
            const res=response['data'];
            switch(res){
                case "Correct Flag":
                    alert("Correct Flag");
                    break;
                case "already solved":
                    alert("already solved!");
                    break;
                case "Wrong flag":
                    alert("Wrong flag..");
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
    <h1>Challenge Page</h1>
    <Form onSubmit={handleSubmit} />
    <br></br>
    <Modal show={ show } close={ handleModalClose } open={ handleModalOpen } title="challenge 1"></Modal>
    </div>
    )
};

export default Chall;