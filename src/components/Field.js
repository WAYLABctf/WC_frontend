import React from 'react';

const Field = React.forwardRef(({label, name, type, placeholder}, ref) => {
    return (
      <div>
        <span>{label}</span>
        <input ref={ref} type={type} name={name} placeholder={placeholder} required/>
      </div>
    );
});

export default Field;