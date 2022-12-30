import React from 'react';

const Colors = ({ value, setValue, options }) => {
  function handleClick({ target }) {
    if (!value.includes(target.id)) {
      setValue([...value, target.id]);
      target.style.opacity = '1';
    } else if (value.includes(target.id)) {
      setValue(value.filter((option) => option !== target.id));
      target.style.opacity = '0.2';
    }
  }

  return (
    <>
      <section>
        {options.map(({ name, cor }) => (
          <div
            onClick={handleClick}
            key={name}
            id={name}
            style={{
              opacity: 0.2,
              background: cor,
              display: 'grid',
              marginTop: '20px',
              height: '100px',
              width: '100px',
              borderRadius: '50%',
            }}
          ></div>
        ))}
      </section>
    </>
  );
};

export default Colors;
