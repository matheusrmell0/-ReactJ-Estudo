import React from 'react'

const ButtonModal = ( {Modal} ) => {
  function handleClick(){
    Modal((ativo) => !ativo)
  }
  return (
    <button onClick={handleClick}>Abrir</button>
  )
}

export default ButtonModal