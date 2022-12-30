import React from 'react';

// const FormReact = () => {
//   const [nome, setNome] = React.useState('');
//   const [email, setEmail] = React.useState('');

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(nome, email);
//   }

//   return (
//     <div style={{ width: '500px' }}>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nome">Nome</label>
//         <input
//           name="nome"
//           value={nome}
//           onChange={({ target }) => setNome(target.value)}
//           id="nome"
//           type="text"
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           onChange={({ target }) => {
//             setEmail(target.value);
//           }}
//           value={email}
//           name="email"
//           id="email"
//           type="email"
//         />
//         <button>Enviar</button>
//       </form>
//       <div
//         style={{
//           border: '1px solid gray',
//           marginTop: '20px',
//           padding: '0px 15px',
//         }}
//       >
//         <p>{nome}</p>
//       </div>
//     </div>
//   );
// };

// import React from 'react';

// const FormReact = () => {
//   const [form, setForm] = React.useState({});

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(form);
//   }

//   function handleChange({ target }) {
//     const { id, value } = target;
//     setForm({ ...form, [id]: value });
//   }

//   return (
//     <div style={{ width: '500px' }}>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nome">Nome</label>
//         <input value={form.nome} name="nome" onChange={handleChange} id="nome" type="text" />
//         <label htmlFor="email">Email</label>
//         <input value={form.email} onChange={handleChange} name="email" id="email" type="email" />
//         <button>Enviar</button>
//       </form>
//       <div
//         style={{
//           border: '1px solid gray',
//           marginTop: '20px',
//           padding: '0px 15px',
//         }}
//       >
//         <p>{form.nome}</p>
//       </div>
//     </div>
//   );
// };

// import useFetch from '../userHooks/useFetch';

// const FormReact = () => {
//   const [form, setForm] = React.useState({});
//   const [dados, setDados] = React.useState({});

//   const handleChange = ({ target }) => {
//     const { id, value } = target;
//     setDados({ ...dados, [id]: value });
//   };

//   function handlePost(event) {
//     event.preventDefault();
//     setForm({ ...form, dados });

//     fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     });
//   }

//   return (
//     <>
//       <div style={{ width: '400px' }}>
//         <form onSubmit={handlePost}>
//           <label htmlFor="nome">Nome</label>
//           <input onChange={handleChange} type="text" name="nome" id="nome" />

//           <label htmlFor="email">Email</label>
//           <input onChange={handleChange} type="email" name="email" id="email" />

//           <label htmlFor="senha">Senha</label>
//           <input
//             onChange={handleChange}
//             type="password"
//             name="senha"
//             id="senha"
//           />

//           <label htmlFor="cep">CEP</label>
//           <input onChange={handleChange} type="text" name="CEP" id="cep" />

//           <label htmlFor="rua">Rua</label>
//           <input onChange={handleChange} type="text" name="rua" id="rua" />

//           <label htmlFor="numero">Número</label>
//           <input
//             onChange={handleChange}
//             type="number"
//             name="numero"
//             id="numero"
//           />

//           <label htmlFor="bairro">Bairro</label>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="bairro"
//             id="bairro"
//           />

//           <label htmlFor="cidade">Cidade</label>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="cidade"
//             id="cidade"
//           />

//           <label htmlFor="estado">Estado</label>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="estado"
//             id="estado"
//           />

//           <button>Enviar</button>
//         </form>
//       </div>
//     </>
//   );
// };

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'text',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'CEP',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'number',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const FormReact = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: '',
      };
    }, {}),
  );

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  function handlePost(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(({ ok }) => {
      if (ok) {
        alert('Formulário Enviado');
      } else {
        alert('Erro no envio do formulário');
      }
    });
  }

  return (
    <>
      <div style={{ width: '400px' }}>
        <form onSubmit={handlePost}>
          {formFields.map(({ id, label, type, bg }) => (
            <div key={id}>
              <label htmlFor={id}>{label}</label>
              <input name={id} type={type} id={id} onChange={handleChange} />
            </div>
          ))}

          <button>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default FormReact;
