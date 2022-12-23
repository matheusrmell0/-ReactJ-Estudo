import React from 'react';
import DesaftioProdutos from './DesafioProdutos';
import DesafioHeader from './DesafioHeader';

const Produtos = () => {
  return (
    <>
      <DesafioHeader grid="grid" cor="blue">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </DesafioHeader>
      <DesaftioProdutos
        text="Produtos"
        size="1rem"
        sizeArray="0.8rem"
        cor="green"
      />
    </>
  );
};

export default Produtos;
