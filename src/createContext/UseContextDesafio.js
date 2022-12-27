import React from 'react';
import { Context } from './DesafioUseContext';

const UseContextDesafio = () => {
  const {produtos} = React.useContext(Context);

  if(produtos === null) return null
  return (
    <div>
      <ul>
        {produtos.map((produto, index) => (
          <li key={`${index}${+Math.random()}`}>
            {produto.nome} R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseContextDesafio;
