import React from 'react'

const ButtonModal = ({ Modal }) => {
  return (
    <button onClick={() => Modal(true)}>Abrir</button>
  )
}

export default ButtonModal