import React from 'react';
import Head from './Head';
import './DesafioRouter.css';

const Contato = () => {
  return (
    <>
      <Head description="Contato da loja" title="Loja | Contato" />
      <section className="container animeLeft">
        <div className="contatoGrid">
          <div className="contatoImage"></div>
          <div className="contatoDescricao">
            <h1>Entre em contato.</h1>
            <p>contato@contato.com</p>
            <p>99999-9999</p>
            <p>Rua Ali Perto, 30</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
