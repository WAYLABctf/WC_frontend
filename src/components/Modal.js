import React from 'react';
import "./Modal.css";

const Modal = ( props ) => {
    return (
        <div className="modal">
            <div
            hidden={!props.show}  
        >
            <div
            className="modal-background"
            onClick={props.close}
            >
            <div className="modal-card">
                
            </div>
            </div>
        </div>
        <button
            className="button"
            onClick={props.open}  
        >
            {props.title}
        </button>
        </div>
        
    )
}
export default Modal;