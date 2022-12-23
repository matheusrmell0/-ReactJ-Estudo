import React from 'react';

const DesafioHome = ({ cor, size,...props }) => {
  return (
    <>
      <h1 style={{ color: cor, fontSize: size }}>Home</h1>
      <p {...props}>Essa é a home do site</p>
    </>
  );
};

export default DesafioHome;
