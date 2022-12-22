import React from 'react';

// const App = () => {
//   const nome = 'Matheus';
//   const meuNome = {
//     first: 'Matheus',
//     second: 'Mello',
//   };
//   const number = Math.random();
//   const Ativo = (bolean) => {
//     return bolean;
//   };
//   const titulo = <h1>Esse é um título</h1>;
//   const NomeCompleto = (nome, sobrenome) => {
//     return `${nome} ${sobrenome}`;
//   };
//   const estiloH1 = {
//     color: 'blue',
//     fontSize: '35px',
//     fontFamily: 'Helvetica',
//   };
//   const date = {
//     color: 'green',
//     fontSize: '20px',
//     fontFamily: 'Helvetica',
//   };
//   const numberS = {
//     color: 'yellow',
//     fontSize: '20px',
//     fontFamily: 'Arial',
//   };

//   //
//   //

//   return (
//     <React.Fragment>
//       <a
//         onClick={(event) => {
//           event.preventDefault()
//           document.querySelector('.ativo').append(document.createElement('p').innerText = event.target.href)
//         }}
//         className="link"
//         href="https://matheusrmell0.github.io/Portfolio/"
//         title="Meu primeiro portifolio"
//       >
//         Meu site
//       </a>

//       <label htmlFor="nome">Nome</label>
//       <input type="text" id="nome" />

//       <h1>
//         Meu nome é <span style={estiloH1}>{nome}</span>
//       </h1>

//       <h1 style={estiloH1}>
//         {NomeCompleto(meuNome.first, meuNome.second)}
//         <span style={date}>
//           <br />
//           {new Date().getFullYear()}
//         </span>
//         <span style={date}>/{new Date().getMonth()}</span>
//         <span style={date}>/{new Date().getDay()}</span>
//       </h1>
//       {titulo}
//       <p className={Ativo(1) ? 'ativo' : 'inativo'}>
//         O número de zero a cem é{' '}
//         <span style={numberS}>{(number * 100).toFixed()}</span>
//       </p>
//     </React.Fragment>
//   );
// };

//
//

// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ],
//   ativa: false,
// };

// const Total = (arg) => {
//   const valor = arg.map((item) => {
//     return +item.preco.replace('R$ ', '');
//   });
//   return Somar(valor);
// };

// const Somar = (valor) =>
//   valor.reduce((acc, item) => {
//     return acc + item;
//   });

// const App = () => {
//   const dados = mario;

//   return (
//     <div>
//       <p>Nome: {dados.cliente}</p>
//       <p>Idade: {dados.idade}</p>
//       <p>
//         Situação:{' '}
//         <span style={{ color: dados.ativa ? 'green' : 'red' }}>
//           {dados.ativa ? 'Ativa' : 'Inativa'}
//         </span>
//       </p>
//       <p>Total gasto: R$ {Total(dados.compras)}</p>
//       {Total(dados.compras) > 10000 && <p>Você está gastando muito</p>}
//     </div>
//   );
// };

//
//

// const App = () => {
//   const produtos = ['Notebook', 'Tablet', 'Smartphone'];
//   const produtosLi = [
//     <li key="e1">Notebook</li>,
//     <li key="e2">Tablet</li>,
//     <li key="e3">Smartphone</li>,
//   ];
//   const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
//   const livros = [
//     { nome: 'A Game of Thrones', ano: 1996 },
//     { nome: 'A Clash of Kings', ano: 1998 },
//     { nome: 'A Storm of Swords', ano: 2000 },
//   ];

//   return (
//     <>
//       <div>{produtosLi}</div>
//       <ul>
//         {filmes.map((filme) => (
//           <li key={filme}>{filme}</li>
//         ))}
//       </ul>
//       <ul>
//         {livros.filter(({ano}) => ano >= 1998).map(({ nome, ano }) => (
//           <li key={nome}>
//             {nome}, {ano}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

//
//

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  return (
    <section>
      {produtos
        .filter(({ preco }) => Number(preco.replace('R$ ', '')) > 1500)
        .map(({ id, nome, preco, cores }) => (
          <div key={id}>
            <h1>{nome}</h1>
            <p>{preco}</p>
            <ul>
              {cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor, color: '#fff' }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default App;
