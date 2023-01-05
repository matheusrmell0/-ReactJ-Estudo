import React from 'react';
import Titulo from '../Pagina Pratica/Titulo';
import Head from './Head';

const SobreR = () => {
  
  return (
    <section>
      <Head title="Sobre" descricao='Essa é a página sobre do site' />
      <Titulo text="Sobre" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui suscipit
        eum nobis accusantium mollitia iure nemo magni ipsa asperiores quos
        voluptate, veritatis voluptatem totam eveniet enim fugiat pariatur nam
        eos.
      </p>
    </section>
  );
};

export default SobreR;
