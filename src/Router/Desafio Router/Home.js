import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './DesafioRouter.css';
import Head from './Head';

const Home = () => {
  const [json, setJson] = React.useState(null);
  const location = useLocation();

  function fetchProdutos() {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setJson((...prev) => json));
  }

  React.useEffect(() => {
    fetchProdutos();
  }, [location]);

  if (json === null) return null;
  return (
    <>
      <section className="container animeLeft">
        <Head description="Loja de itens eletrónicos" title="Loja | Stuffs" />
        <div className="listProdutos">
          {json.map(({ id, nome, fotos, index }) => (
            <div key={id}>
              <div className="produtosTela">
                <NavLink to={`produto/${fotos[0].titulo}`}>
                  <img
                    className="fotoProduto"
                    src={fotos[0].src}
                    alt={fotos[0].titulo}
                  />
                </NavLink>
              </div>
              <h1 className="nomeProduto">{nome}</h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
