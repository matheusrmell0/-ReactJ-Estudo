import React from 'react';
import foto from '../Router/Desafio Router/img/contato.jpg';
import Head from './Storage/Head';
import style from './Contato.module.css';
import { GlobalContext } from './Storage/Global';

const Contato = () => {
  const { loading } = React.useContext(GlobalContext);
  if (loading) return <div className="loading animeLeft"></div>;
  return (
    <>
      <Head title="Contato" descricao="Contato da Loja" />
      <section className={`${style.contato} animeLeft`}>
        <img src={foto} alt="Maquina de escrever" />
        <div>
          <h1>Entre em contato.</h1>
          <ul className={style.dados}>
            <li>contato@contato.com</li>
            <li>99999-9999</li>
            <li>Rua Ali Perto, 30</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contato;
