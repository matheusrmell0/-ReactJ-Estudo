import React from 'react';
import { GlobalContext } from './UserContext';

const ProdutoContext = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setContar((contar) => contar + 1);
  }

  return (
    <div>
      {global.nome}
      <h1>{global.contar}</h1>
      <button onClick={handleClick}>Adicionar</button>
      <br />
      <br />
      <button onClick={() => global.addDois()}>Adicionar +2</button>
      <br />
      <br />
      <button onClick={() => global.addTres()}>Adicionar +3</button>
    </div>
  );
};

export default ProdutoContext;
