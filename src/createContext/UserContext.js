import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  function addDois() {
    setContar((contar) => contar + 2);
  }
  function addTres() {
    setContar((contar) => contar + 3);
  }

  return (
    <GlobalContext.Provider value={{ nome: 'Mello', contar, setContar, addTres, addDois }}>
      {children}
    </GlobalContext.Provider>
  );
};
