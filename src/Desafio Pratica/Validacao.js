import React from 'react';
import Input from '../Componentes/Formulario/Input';

export const Validacao = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validadeCep(value) {
    if (value.lenght === 0) {
      setError('Preencha o CEP');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validadeCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validadeCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validadeCep(cep)) console.log('Enviou');
    else console.log('Não enviou');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        value={cep}
        label="CEP"
        id="cep"
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};
