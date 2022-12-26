import React from 'react';

// const useRef = () => {
//   const video = React.useRef();

//   React.useEffect(() => {
//     const current = video.current;
//     current.classList.add('Ola');
//     console.log(current);
//     console.log(current.currentTime);
//   }, []);

//   return <video ref={video} />;
// };

// const useRef = () => {
//   const [comentarios, setComentarios] = React.useState([]);
//   const [input, setInput] = React.useState('');
//   const inputRef = React.useRef();

//   function handleClick() {
//     setComentarios((prev) => [...prev, input]);
//     setInput('');
//     inputRef.current.focus();
//   }
//   function handleKey({ key }) {
//     if (key === 'Enter') {
//       setComentarios((prev) => [...prev, input]);
//       setInput('');
//       inputRef.current.focus();
//     } else return null;
//   }

//   return (
//     <div>
//       <ul>
//         {comentarios.map((comentario, index) => (
//           <li key={`${comentario}${index}`}>{comentario}</li>
//         ))}
//       </ul>
//       <input
//         onKeyDownCapture={handleKey}
//         ref={inputRef}
//         onChange={({ target }) => setInput(target.value)}
//         type="text"
//         value={input}
//       />
//       <button onClick={handleClick} style={{ marginTop: '20px' }}>
//         Enviar
//       </button>
//     </div>
//   );
// };

const useRef = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeOutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Adicionado no carrinho');

    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default useRef;
