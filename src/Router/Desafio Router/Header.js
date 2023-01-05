import React from 'react'
import './DesafioRouter.css';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='container'>
      <nav>
        <ul className='headerNav'>
          <li><NavLink className='navlink' to='/' end>Produtos</NavLink></li>
          <li><NavLink className='navlink' to='contato'>Contato</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header