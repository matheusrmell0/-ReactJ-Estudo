import React from 'react';

export const ResultContext = React.createContext();

export const ResultStorage = ({ children }) => {
  const [pontos, setPontos] = React.useState(0)
  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

  function checkAnswer(){
    setPontos((...pontos) => +pontos + 1)
    return pontos
  }

  return <ResultContext.Provider value={{checkAnswer, pontos, setPontos, perguntas}} >{children}</ResultContext.Provider>;
};
