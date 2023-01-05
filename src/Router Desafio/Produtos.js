import React from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from './Storage/Global';
import Head from './Storage/Head';
import style from './Produtos.module.css'

const Produtos = () => {
  const { produtos, error, loading } = React.useContext(GlobalContext);
  
  if (error) return <p>{error}</p>;
  if (loading) return <div className="loading"></div>;
  if (produtos === null) return null;
  return (
    <>
    <Head title='Produtos' descricao={`Lista de ${produtos.length} produtos`} />
      <section className={`${style.produtos} animeLeft`}>
        {produtos.map((produto) => (
          <div key={produto.fotos[0].src}>
            <h1 className={style.nome} >{produto.nome}</h1>
            <NavLink to={`produto/${produto.id}`}>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            </NavLink>
          </div>
        ))}
      </section>
    </>
  );
};

export default Produtos;
