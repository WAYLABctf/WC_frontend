import React from 'react';

const Field = React.forwardRef(({label, type, placeholder}, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} type={type} placeholder={placeholder}/>
      </div>
    );
});

export default Field;