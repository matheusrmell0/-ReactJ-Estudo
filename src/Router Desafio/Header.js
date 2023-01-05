import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = () => {
  return (
    <header>
      <nav className={style.header}>
        <ul>
          <li>
            <NavLink className={style.link} to="/" end>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink className={style.link} to="contato" end>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
