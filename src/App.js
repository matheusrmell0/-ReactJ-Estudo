import React from 'react';
import ButtonModal from './useState/ButtonModal';
import Modal from './useState/Modal';
// import HeaderP from './Pagina Pratica/HeaderP';
// import HomeP from './Pagina Pratica/HomeP';
// import ProdutosP from './Pagina Pratica/ProdutosP';

// import React, { Fragment } from 'react';

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

// Mostre apenas produtos que forem mais caros que R$ 1500
// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];

// const App = () => {
//   return (
//     <section>
//       {produtos
//         .filter(({ preco }) => Number(preco.replace('R$ ', '')) > 1500)
//         .map(({ id, nome, preco, cores }) => (
//           <div key={id}>
//             <h1>{nome}</h1>
//             <p>{preco}</p>
//             <ul>
//               {cores.map((cor) => (
//                 <li key={cor} style={{ backgroundColor: cor, color: '#fff' }}>
//                   {cor}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//     </section>
//   );
// };

// const App = () => {
//   const handleClick = (event) => {
//     console.log(event);
//   };
//   return (
//     <div>
//       <button onClick={handleClick} onMouseMove={(event) => {console.log(event.target)}}>Click</button>
//     </div>
//   );
// };

// const App = () => {
//   const scroll = (event) => {
//     console.log(event);
//   };
//   window.addEventListener('scroll', scroll);
//   return (
//     <div style={{ height: '200vh' }}>
//       <button>Ola</button>
//     </div>
//   );
// };
//

//
// import Header from './Header';
// import Footer from './Footer';
// import Form from './Form/Form';

// const Test = () => {
//   const active = false;
//   if (active) {
//     return <p>Teste</p>;
//   } else {
//     return null;
//   }
// };

// const App = () => {
//   return (
//     <React.Fragment>
//       <Test />
//       <Header />
//       <Form />
//       <Footer />
//     </React.Fragment>
//   );
// };
//

// //
// const Grid = ({ cor, children, grid, size }) => {
//   return (
//     <div style={{ color: cor, display: grid, fontSize: size }}>{children}</div>
//   );
// };
// const Titulo = ({ cor, texto, children }) => {
//   return (
//     <h1 style={{ color: cor }}>
//       {texto} {children}
//     </h1>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <div>
//         <Titulo cor="red" texto="Meu titulo 1" />
//         <Titulo>
//           <p>Isso é o children</p>
//         </Titulo>
//         <Titulo cor="blue" texto="Meu titulo 2" />
//         <Grid cor="gray" grid="grid" size="3rem">
//           <p>Isso é o children</p>
//         </Grid>
//         <Form />
//       </div>
//     </>
//   );
// };
// //

// const App = () => {
//   let Pagina;
//   const { pathname } = window.location;
//   if (pathname === '/produtos') {
//     Pagina = DesaftioProdutos;
//   } else {
//     Pagina = DesafioHome;
//   }
//   return (
//     <>
//       <DesafioHeader grid="grid" cor="blue">
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/produtos">Produtos</a>
//         </li>
//       </DesafioHeader>
//       <Pagina size="2rem" cor="green" />
//     </>
//   );
// };

// const App = () => {
//   let Pagina;
//   const { pathname } = window.location;
//   if (pathname === '/produtos') {
//     Pagina = ProdutosP
//   } else {
//     Pagina = HomeP
//   }

//   return (
//     <>
//       <HeaderP />
//       <Pagina />
//     </>
//   );
// };

// const App = () => {
//   let ativo = true;
//   const handleClick = () => {
//     ativo = (!ativo)
//   }
//   return (
//     <div>
//       <button onClick={handleClick} disabled={!ativo}>{ativo ? 'Ativo' : 'Inativo'}</button>
//     </div>
//   )
// }
//

// const App = () => {
//   const ativoHook = React.useState(false);
//   const ativoValor = ativoHook[0];
//   const atualizaValor = ativoHook[1];

//   console.log(ativoHook);
//   const handleClick = () => {
//     atualizaValor(!ativoValor);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>{ativoValor ? 'Ativo' : 'Inativo'}</button>
//     </div>
//   );
// };
// //

// const App = () => {
//   const [ativo, setAtivo] = React.useState(false);
//   const [dados, setDados] = React.useState({ nome: 'Matheus', idade: '24' });

//   const handleClick = () => {
//     setAtivo(!ativo);
//     setDados({ ...dados, profissao: 'Eng' });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
//       <p>{dados.nome}</p>
//       <p>{dados.idade}</p>
//       {ativo ? <p>{dados.profissao}</p> : null}
//     </div>
//   );
// };
// //

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>

      <Modal modal={modal} setModal={setModal} />
      <ButtonModal Modal={setModal} />
    </div>
  );
};

export default App;
