import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <>
      <select
        {...props}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((item) => (
          <option key={item} id={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
