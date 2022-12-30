import React from 'react';
import Radio from '../Componentes/Formulario/Radio';
import { ResultContext } from './FormContext';

const FormChallenger = () => {
  const {pontos, checkAnswer, perguntas} = React.useContext(ResultContext);
  const [value, setValue] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (perguntas[2].resposta === value) 
    localStorage.setItem(perguntas[2].id, '1')
    checkAnswer();
  }

  function handleClick() {
    window.location.pathname = perguntas[3].id;
    return pontos
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formChallenger">
        <h1 className="formChallengerh1">{perguntas[2].pergunta}</h1>
        <Radio
          setValue={setValue}
          value={value}
          options={perguntas[2].options}
        />
      </div>
      <button onClick={handleClick} style={{ marginTop: '20px' }}>
        Próxima
      </button>
    </form>
  );
};

export default FormChallenger;
