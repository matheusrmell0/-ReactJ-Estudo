import React from 'react';
import ProdutoP from './ProdutoP';
import Titulo from './Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  { nome: 'Macbook', propriedades: ['32gb ram', '964gb'] },
];

const ProdutosP = () => {
  return (
    <section>
      <Titulo text="Produtos" />
      {produtos.map((produtoSpecs) => (
        <ProdutoP key={produtoSpecs.nome} {...produtoSpecs} />
      ))}
    </section>
  );
};

export default ProdutosP;
