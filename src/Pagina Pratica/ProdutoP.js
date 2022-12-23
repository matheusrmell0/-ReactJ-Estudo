import React from 'react';

const ProdutoP = ({ nome, propriedades }) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '20px' }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((specs) => (
          <li key={specs}>{specs}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProdutoP;
