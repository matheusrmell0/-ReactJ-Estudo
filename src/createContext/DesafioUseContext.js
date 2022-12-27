import React from 'react';

export const Context = React.createContext();

export const Storage = ({ children }) => {
  const [produtos, setProdutos] = React.useState(null);

 React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
    .then((api) => api.json())
    .then((json) => setProdutos(json))
  }, [])

  function limparProdutos() {
    setProdutos(null);
  }

  return (
    <Context.Provider
      value={{
        nome: 'Mello',
        produtos,
        setProdutos,
        limparProdutos,
      }}
    >
      {children}
    </Context.Provider>
  );
};
