import React from 'react';

const ProdutoE = ({ list }) => {
    return (
      <div>
        <div>
          <h1>{list.nome}</h1>
          <p style={{ fontSize: '1.4rem', fontWeight: '700' }}>
            R$ {list.preco.replace('.', ',')}
          </p>
        </div>
      </div>
    );
};

export default ProdutoE;
