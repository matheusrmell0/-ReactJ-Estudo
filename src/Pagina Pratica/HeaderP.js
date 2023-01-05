import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const HeaderP = () => {
  const activeStyle = {
    color: 'red',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const location = useLocation();

  React.useEffect(() => {
    console.log('Google Analytics');
  }, [location]);

  return (
    <nav>
      <NavLink activeStyle={activeStyle} to="/" end>
        Home
      </NavLink>{' '}
      /{' '}
      <NavLink activeStyle={activeStyle} to="sobre" end>
        Sobre
      </NavLink>{' '}
      /{' '}
      <NavLink activeStyle={activeStyle} to="login" end>
        Login
      </NavLink>{' '}
    </nav>
  );
};

export default HeaderP;
