import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return <span className={style.footer}>Alguns direitos reservados.</span>;
};

export default React.memo(Footer);
