import React from 'react';

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.
const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const FormOtimiza = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label style={{ textTransform: 'capitalize' }} key={cor}>
          {' '}
          <input
            onChange={handleChange}
            checked={handleChecked(cor.toLowerCase())}
            type="checkbox"
            value={cor.toLowerCase()}
          />{' '}
          {cor}
        </label>
      ))}
      <ul>
        {cores.map((cor) => (
          <li style={{ textTransform: 'capitalize' }} key={cor}>
            {cor}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default FormOtimiza;
