import React from 'react';
import UserFetch from './Teste UserHooks/UserFetch';

// import PreferenciaUser from './Teste UserHooks/PreferenciaUser';
// import { Storage } from './createContext/DesafioUseContext';
// import LimparProdutos from './createContext/LimparProdutos';
// import UseContextDesafio from './createContext/UseContextDesafio';
// import ProdutoContext from './createContext/ProdutoContext';
// import UseRef from './useRef/UseRef';
// import ProdutoEffect from './useEffect/ProdutoEffect';
// import ProdutoE from './useEffect/ProdutoE';
// import Modal from './useEffect/Modal';
// import DesafioDots from './useState/DesafioDots';
// import './useState/Style.css';
// import Produto from './useState/Produto';
// import ButtonModal from './useState/ButtonModal';
// import Modal from './useState/Modal';
// import Teste from './useState/Teste';
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

// const App = () => {
//   const [modal, setModal] = React.useState(false);
//   const TesteShow = (retorno, test) => {
//     return retorno + test;
//   };
//   const [items, setItems] = React.useState('Item');

//   function handleClick() {
//     setItems('Outro')
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Clicar</button>
//       <p>{items}</p>
//       <Teste Test={TesteShow} />
//       <Modal modal={modal} setModal={setModal} />
//       <ButtonModal Modal={setModal} />
//     </div>
//   );
// };

// const App = () => {
// const [contar, setContar] = React.useState(1)
// const [items, setItems] = React.useState(['Item 1'])

// function handleClick() {
//   setContar(contar => contar + 1);
//   setItems((items) => [...items, `Item ${contar + 1}`])
// }

//   return (
//     <div>
//       {items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//       <button onClick={handleClick} >{contar}</button>
//     </div>
//   );
// };

// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook

// const App = () => {
//   const [dados, setDados] = React.useState(null);
//   const [loading, setLoading] = React.useState(null);

//   async function handleClick(event) {
//     setLoading(true)
//     const reponse = await fetch(
//       `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`,
//     );
//     const reponseJson = await reponse.json();
//     setDados(reponseJson);
//     setLoading(false);
//   }

//   return (
//     <>
//       <div>
//         <header style={{ display: 'flex', gap: '15px' }}>
//           <button onClick={handleClick}>Notebook</button>
//           <button onClick={handleClick}>Smartphone</button>
//           <button onClick={handleClick}>Tablet</button>
//         </header>
//         <div>
//           {loading && <p>Carregando...</p>}
//           {!loading && dados && <Produto dados={dados} />}
//         </div>
//       </div>
//     </>
//   );
// };

// const App = () => {
//   const [list, setList] = React.useState([]);
//   const [undid, setUndid] = React.useState([]);

//   const handleClick = ({ clientX, clientY }) => {
//     const newDot = {
//       clientX,
//       clientY,
//     };
//     setList((prev) => [...prev, newDot]);
//     setUndid([])
//   };

//   const handleUndo = (event) => {
//     event.stopPropagation();

//     if (list.length === 0) return;

//     const lastItem = list[list.length - 1];
//     setUndid((prev) => [...prev, lastItem])

//     setList(prev => [...prev].slice(0, -1));
//   };

//   const handleRedo = (event) => {
//     event.stopPropagation();

//     if (undid.length === 0) return;

//     const recoveredDot = undid[undid.length - 1];
//     setList((prev) => [...prev, recoveredDot])

//     setUndid(prev => [...prev].slice(0, -1));
//   };

//   return (
//     <div id="page" onClick={handleClick}>
//       <div style={{ display: 'flex', gap: '20px', margin: '0 auto' }}>
//         <button onClick={handleUndo}>Desfazer</button>
//         <button onClick={handleRedo}>Refazer</button>
//       </div>
//       {list.map((item, index) => (
//         <span
//           key={`${item}${index}`}
//           className="dot"
//           style={{ left: item.clientX, top: item.clientY }}
//         />
//       ))}
//     </div>
//   );
// };
//

// const App = () => {
//   const [contar, setContar] = React.useState(0);
//   const [dados, setDados] = React.useState(null);

//   React.useEffect(() => {
//     console.log('Executou');
//   }, []);

//   React.useEffect(() => {
//     document.title = `Total ${contar}`;
//   }, [contar]);

//   React.useEffect(() => {
//     fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
//       .then((response) => response.json())
//       .then((rJson) => setDados(rJson));
//   }, []);

//   return (
//     <div>
//       <button onClick={() => setContar(contar + 1)}>{contar}</button>
//       {dados && <div>
//         <h1>{dados.nome}</h1>
//         <p>R$ {dados.preco * contar}</p>
//       </div>}
//     </div>
//   );
// };
//

// const App = () => {
// const [ativo, setAtivo] = React.useState(false)

//   return (
//   <div>
//     {ativo && <Modal/>}
//     <button onClick={() => setAtivo(!ativo)}>Toogle Modal</button>
//   </div>
//   );
// };

// const App = () => {
//   const [list, setList] = React.useState(null);
//   const produtoStorage = localStorage.getItem('produto');

//   if (produtoStorage) {
//     fecthApi(produtoStorage);
//   }

//   function handleClick({ target }) {
//     localStorage.setItem('produto', target.innerText.toLowerCase());
//     fecthApi(target.innerText.toLowerCase());
//   }

//   async function fecthApi(url) {
//     const produtoObj = await fetch(
//       `https://ranekapi.origamid.dev/json/api/produto/${url}`,
//     );
//     const produtoJson = await produtoObj.json();
//     setList(produtoJson);
//   }

//   return (
//     <>
//       <h1>
//         Preferência: {(list && list.nome) || localStorage.getItem('produto')}
//       </h1>
//       <div style={{ display: 'flex', gap: '15px' }}>
//         <button onClick={handleClick}>Notebook</button>
//         <button onClick={handleClick}>Smartphone</button>
//       </div>
//       {list && (
//         <div>
//           <ProdutoE list={list} />
//         </div>
//       )}
//     </>
//   );
// };

// export default App;

// const App = () => {
//   const [list, setList] = React.useState(null);

//   async function handleClick({ target }) {
//     localStorage.setItem('produto', target.innerText)
//     const produtoStorage = localStorage.getItem('produto')
//     const produtoObj = await fetch(
//       `https://ranekapi.origamid.dev/json/api/produto/${produtoStorage}`,
//     );
//     const produtoJson = await produtoObj.json();
//     setList(produtoJson);
//   }

//   return (
//     <>
//       <h1>Preferência: {(list && list.nome) || localStorage.getItem('produto')}</h1>
//       <div style={{ display: 'flex', gap: '15px' }}>
//         <button onClick={handleClick}>Notebook</button>
//         <button onClick={handleClick}>Smartphone</button>
//       </div>
//       {list && (
//         <div>
//           <ProdutoE list={list}/>
//         </div>
//       )}
//     </>
//   );
// };

// export default App;

// const App = () => {
//   const [produto, setProduto] = React.useState(null);

//   React.useEffect(() => {
//     if (produto !== null) localStorage.setItem('produto', produto);
//   }, [produto]);

//   React.useEffect(() => {
//     const produtoName = localStorage.getItem('produto');
//     if (produtoName !== null) setProduto(produtoName);
//   }, []);

//   function handleClick({ target }) {
//     setProduto(target.innerText);
//   }

//   return (
//     <>
//       <h1>Preferência: {produto}</h1>
//       <div style={{ display: 'flex', gap: '20px' }}>
//         <button onClick={handleClick}>Notebook</button>
//         <button onClick={handleClick}>Smartphone</button>
//       </div>
//       <ProdutoEffect produto={produto}/>
//     </>
//   );
// };
//

// function operacaoLenta() {
//   let c;
//   for(let i = 0; i < 1000000000; i ++){
//     c = i + i /1000
//   }
//   return c
// }

// const App = () => {
//   const [contar, setContar] = React.useState(0);

//   // localStorage.setItem('item1', 'Produto 1');
//   // const valor = React.useMemo(() => {
//   //   console.log('Memo teste');
//   //   return localStorage.getItem('item1');
//   // }, []);

//   const t1 = performance.now();
//   const valor = React.useMemo(() => operacaoLenta(), [])
//   console.log(valor)
//   console.log(performance.now() - t1)

//   return (
//     <>
//       <div>
//         <button onClick={() => setContar(contar + 1)}>{contar}</button>
//       </div>
//     </>
//   );
// };
//

// const set1 = new Set();
// const set2 = new Set();

// const Produto = () => {
//   const func1 = () => {
//     console.log('Teste');
//   };

//   const func2 = React.useCallback(() => {
//     console.log('Teste');
//   }, []);

//   set1.add(func1);
//   set2.add(func2);

//   console.log('Set1:', set1);
//   console.log('Set2:', set2);
//   return (
//     <div>
//       <p onClick={func1}>Produto 1</p>
//       <p onClick={func2}>Produto 2</p>
//     </div>
//   );
// };

// const App = () => {
//   const [contar, setContar] = React.useState(0);

//   return (
//     <div>
//       <Produto />
//       <button onClick={() => setContar(contar + 1)}>{contar}</button>
//     </div>
//   );
// };

//
// import { GlobalStorage } from './createContext/UserContext';

// const App = () => {
//   return (
//     <>
//       <GlobalStorage>
//         <ProdutoContext />
//       </GlobalStorage>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <div>
//         <Storage>
//           <UseContextDesafio />
//           <LimparProdutos/>
//         </Storage>
//       </div>
//     </>
//   );
// };
//

const App = () => {
  return (
    <>
      <UserFetch/>
    </>
  );
};

export default App;
