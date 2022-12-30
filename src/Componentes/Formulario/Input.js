import React from 'react';

const Input = ({ label, id, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          onChange={onChange}
          name={id}
          id={id}
          type="text"
          {...props}
        />
      </label>
    </>
  );
};

export default Input;
