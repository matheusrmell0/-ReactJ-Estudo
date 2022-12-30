import React from 'react';
import Radio from '../Componentes/Formulario/Radio';
import { ResultContext } from './FormContext';

const FormChallenger = () => {
  const {pontos, checkAnswer, perguntas} = React.useContext(ResultContext);
  const [value, setValue] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (perguntas[1].resposta === value) 
    localStorage.setItem(perguntas[1].id, '1')
    checkAnswer();
  }

  function handleClick() {
    window.location.pathname = perguntas[2].id;
    return pontos
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formChallenger">
        <h1 className="formChallengerh1">{perguntas[1].pergunta}</h1>
        <Radio
          setValue={setValue}
          value={value}
          options={perguntas[1].options}
        />
      </div>
      <button onClick={handleClick} style={{ marginTop: '20px' }}>
        Próxima
      </button>
    </form>
  );
};

export default FormChallenger;
