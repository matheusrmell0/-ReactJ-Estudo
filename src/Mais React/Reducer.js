import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'REMOVER':
      return state.filter((item) => item !== action.content);
    case 'ADICIONAR':
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const Reducer = () => {
  const [state, dispatch] = React.useReducer(
    reducer,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  );
  const [ten, setTen] = React.useState(state[state.length - 1]);

  function handleClick({ target }) {
    setTen(ten + 1);
    dispatch({ type: target.innerText.toUpperCase(), content: ten + 1 });
  }

  function handleCliclTwo({ target }) {
    const lastItem = state.slice(0, -1);
    dispatch({
      type: target.innerText.toUpperCase(),
      content: lastItem[lastItem.length - 1],
    });
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '20px' }}>
        {state.map((i) => (
          <div key={i + Math.random()}>
            <p>{i}</p>{' '}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button onClick={handleCliclTwo}>Remover</button>
        <button onClick={handleClick}>Adicionar</button>
      </div>
    </>
  );
};

export default Reducer;
