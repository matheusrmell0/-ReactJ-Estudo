import React from 'react';

const Produto = ({ dados }) => {

  const Img = () => <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />;
  const precoLimpo = () => dados.preco.replace('.', ',');

    return (
      <>
        <div>
          <h1>{dados.nome}</h1>
          <p>{`${precoLimpo()} R$`}</p>
          <picture>{Img()}</picture>
        </div>
      </>
    );
};

export default Produto;
