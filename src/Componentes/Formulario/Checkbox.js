import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) setValue([...value, target.value]);
    else setValue(value.filter((option) => option !== target.value));
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            checked={value.includes(option)}
            value={option}
            onChange={handleChange}
            key={option}
            type="checkbox"
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
