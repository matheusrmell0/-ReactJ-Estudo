import React from 'react';

export const GlobalContext = React.createContext();

export const GlobaltStorage = ({ children }) => {
  const [produtos, setProdutos] = React.useState(null);
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const api = 'https://ranekapi.origamid.dev/json/api/produto'

  React.useEffect(() => {
    async function fetchAPI(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProdutos(json);
      } catch (error){
        alert('Erro no carregamento da API')
        setError('Um erro ocorreu no carregamento da API')
      } finally {
        setLoading(false);
      }
    }
    fetchAPI(api);
  }, []);

  return (
    <GlobalContext.Provider
      value={{ produtos, setProdutos, loading, setLoading, setError, error, api, produto, setProduto }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
