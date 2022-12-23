import React from 'react';

const Header = () => {
  return (
    <header style={{ marginBottom: '60px' }}>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img src="./" alt="Logo" />
        <ul style={{ display: 'flex', gap: '40px' }}>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
