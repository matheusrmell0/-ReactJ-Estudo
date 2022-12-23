import React from 'react';

const DesaftioProdutos = ({ size, cor, sizeArray }) => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  const Titulo = (cor) => {
    return <h1 style={{ color: cor }}>Produtos</h1>;
  };
  const showProdutcs = (array) => {
    return array.map(({ nome, propriedades }) => {
      return (
        <div key={nome}>
          <h1>{nome}</h1>
          <ul>
            {propriedades.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return (
    <>
      <section>
        <h1 style={{ fontSize: size, color: cor }}>{Titulo()}</h1>
        <div style={{ border: '1px solid black', padding: '20px 40px' }}>
          <div style={{ fontSize: sizeArray }}>{showProdutcs(produtos)}</div>
        </div>
      </section>
    </>
  );
};

export default DesaftioProdutos;
