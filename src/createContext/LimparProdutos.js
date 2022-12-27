import React from 'react'
import { Context } from './DesafioUseContext'

const LimparProdutos = () => {
  const { limparProdutos } = React.useContext(Context)
  return (
    <button onClick={() => limparProdutos()}>Limpar Produtos</button>
  )
}
export default LimparProdutos