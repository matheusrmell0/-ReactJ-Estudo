import React from 'react';

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((item) => (
        <label key={item}>
          <input
            {...props}
            onChange={({ target }) => setValue(target.value)}
            checked={value === item}
            value={item}
            type="radio"
          />
          {item}
        </label>
      ))}
    </>
  );
};

export default Radio;
