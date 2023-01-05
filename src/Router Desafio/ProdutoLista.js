import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from './Storage/Global';
import Head from './Storage/Head';
import style from './ProdutoLista.module.css';

const ProdutoLista = () => {
  const { produto, api, setLoading, setProduto, setError, loading, error } =
    React.useContext(GlobalContext);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchAPI(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (error) {
        alert('Erro no carregamento da API');
        setError('Um erro ocorreu no carregamento da API');
      } finally {
        setError(null);
        setLoading(false);
      }
    }
    fetchAPI(`${api}/${id}`);
  }, [api, id, setError, setLoading, setProduto]);

  if (error) return <p>{error}</p>;
  if (loading) return <div className="loading"></div>;
  if (produto === null) return null;
  return (
    <>
      <Head title={produto.nome} descricao={`Produto | ${produto.nome}`} />
      <section className={`${style.produto} animeLeft`}>
          <div>
            {produto.fotos.map(({ src, titulo }) => (
              <img key={src} src={src} alt={titulo}></img>
            ))}
          </div>
          <div>
            <ul className={style.lista}>
              <li>
                <h1>{produto.nome}</h1>
              </li>
              <li>
                <span className={style.preco}>R$ {produto.preco}</span>
              </li>
              <li>
                <p className={style.descricao}>{produto.descricao}</p>
                <button className={style.button}>Comprar</button>
              </li>
            </ul>
          </div>
      </section>
    </>
  );
};

export default ProdutoLista;
