import React from 'react';

const DesafioHeader = ({ grid, children, cor }) => {
  return (
    <header style={{ color: cor }}>
      <nav style={{ display: grid }}>
        <ul>{children}</ul>
      </nav>
    </header>
  );
};

export default DesafioHeader;
