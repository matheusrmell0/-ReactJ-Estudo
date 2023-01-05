import React from 'react';
import { useNavigate } from 'react-router-dom';
import Head from './Head';

const Login = () => {
const navigate = useNavigate()

function handleClick(){
  console.log('Logou')
  navigate('/sobre')
}

  return (
    <div>
      <Head title="Login" descricao='Essa é a página de login do site' />
      <h1>Login</h1>
      <button onClick={handleClick}>Logar</button>
    </div>
  );
};

export default Login;
