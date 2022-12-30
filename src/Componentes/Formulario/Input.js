import React from 'react';

const Input = ({
  label,
  id,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={id}
          id={id}
          type={type}
        />
        {error && <p>{error}</p>}
      </label>
    </>
  );
};

export default Input;
