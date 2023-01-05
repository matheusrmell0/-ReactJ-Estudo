import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import './DesafioRouter.css';

const LojaProdutos = () => {
  const [json, setJson] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setJson(json);
      } catch (erro) {
        setError('Um erro ocorreu');
      } finally {
        setLoading(false);
      }
    }

    fetchProduto(
      `https://ranekapi.origamid.dev/json/api/produto/${id.substring(
        0,
        id.length - 2,
      )}`,
    );
  }, [id]);

  if (error) return <p className="container">{error}</p>;
  if (loading) return <div className="container loading"></div>;
  if (json === null) return null;
  else
    return (
      <>
        <section className="container animeLeft">
          <Head
            description={`Produto ${json.nome}`}
            title={`Produto | ${json.nome}`}
          />
          <div className="produtoGrid">
            <div>
              {json.fotos.map((foto) => (
                <img
                  className="produtoImg animeLeft"
                  src={foto.src}
                  alt={foto.titulo}
                  key={foto.titulo}
                ></img>
              ))}
            </div>
            <div>
              <h1 className="produtoTitle">{json.nome}</h1>
              <p className="produtoPreco">R$ {json.preco.replace('.', ',')}</p>
              <p className="produtoDescricao">{json.descricao}</p>
            </div>
          </div>
        </section>
      </>
    );
};

export default LojaProdutos;
