import React from 'react';

const Resposta = () => {
  function result() {
    const result1 = localStorage.getItem('p1');
    const result2 = localStorage.getItem('p2');
    const result3 = localStorage.getItem('p3');
    const result4 = localStorage.getItem('p4');
    const total = +result1 + +result2 + +result3 + +result4;
    if (!total) return 0;
    else return total;
  }
  result();

  return (
    <>
      <h1 style={{ fontFamily: 'monospace' }}>
        Você acertou: {result()} de 4 questões {result() === 4 ? 'Parabéns' : null}
      </h1>
      <br />
      <button
        onClick={() => {
          localStorage.clear();
          window.location.pathname = '/';
        }}
      >
        Tentar novamente
      </button>
    </>
  );
};

export default Resposta;
