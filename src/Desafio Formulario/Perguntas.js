import React from 'react';
import { ResultContext } from './FormContext';
import RadioPerg from './RadioPerg';

const Perguntas = () => {
  const { perguntas } = React.useContext(ResultContext);
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);
  const [respostas, setResposta] = React.useState(
    perguntas.reduce((acc, pergunta) => {
      return {
        ...acc,
        [pergunta.id]: '',
      };
    }, {}),
  );

  function handleChange({ target }) {
    setResposta({ ...respostas, [target.id]: target.value });
  }

  function result() {
    const trueResult = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Você acertou ${trueResult.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      result();
    }
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <RadioPerg
            active={slide === index}
            valor={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
            key={pergunta.id}
          />
        ))}
        {resultado ? (
          <div>
            <p>{resultado}</p>
          </div>
        ) : (
          <button onClick={handleClick}>Próxima</button>
        )}
      </form>
    </>
  );
};

export default Perguntas;
