import React from 'react';
import styles from './Inventario.module.css';

const Inventario = () => {

  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 25000</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};

export default Inventario;
