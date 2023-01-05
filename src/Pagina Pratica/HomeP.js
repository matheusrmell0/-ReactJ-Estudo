import React from 'react';
import { Link } from 'react-router-dom';
import Titulo from './Titulo';
import Head from '../Router/Head';

const HomeP = () => {
  return (
    <section>
      <Head title="Home" descricao='Essa é a home do site' />
      <Titulo text="Home" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        deserunt obcaecati reiciendis quaerat aspernatur dolorem optio
        blanditiis possimus expedita numquam libero tenetur eligendi molestiae,
        totam quasi placeat, vel in quas.
      </p>
      <Link to="produto/notebook">Notebook</Link>{'  '}
      <Link to="produto/smartphone">Smartphone</Link>
    </section>
  );
};

export default HomeP;
