import React from 'react';

const ProdutoEffect = ({ produto }) => {
const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if(produto !== null)
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
    .then((response) => response.json())
    .then((Rjson) => { setDados(Rjson) })
   }, [produto])

  if(dados === null) return null
  return (
  <div>
    <h1>{dados.nome}</h1>
    <p>R$ {dados.preco.replace('.',',')}</p>
  </div>
  )
};

export default ProdutoEffect;
