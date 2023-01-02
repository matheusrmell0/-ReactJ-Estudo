import React from 'react';

const RadioPerg = ({ pergunta, options, id, onChange, valor, active }) => {
  if (!active) return null;
  return (
    <fieldset style={{ marginBottom: '20px', padding: '2rem 1rem' }}>
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label style={{ marginBottom: '1rem' }} key={option}>
          <input
            checked={valor === option}
            value={option}
            onChange={onChange}
            id={id}
            type="radio"
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default RadioPerg;
