import React from 'react';
import useLocalStorage from '../userHooks/useLocalStorage';

const PreferenciaUser = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };

  return (
    <div>
      <h1>Produto preferido é: {produto}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button
        style={{ display: 'block', marginTop: '10px' }}
        onClick={handleClick}
      >
        Tablet
      </button>
    </div>
  );
};

export default PreferenciaUser;
