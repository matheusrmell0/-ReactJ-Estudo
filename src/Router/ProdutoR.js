import React from 'react';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoComprar from './ProdutoComprar';

const ProdutoR = () => {
  const params = useParams();
  const location = useLocation();
  // const search = new URLSearchParams(location.search);
  // console.log(search.get('name'));

  return (
    <div>
      <h1>Produto</h1>
      <p>{params.id.toLocaleUpperCase()}</p>
      <nav>
        <NavLink to="">Descricao</NavLink>
        <NavLink to="avaliacao">Avaliacao</NavLink>
        <NavLink to="comprar">Comprar</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="comprar" element={<ProdutoComprar />} />
      </Routes>
    </div>
  );
};

export default ProdutoR;
