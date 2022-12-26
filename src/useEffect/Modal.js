import React from 'react';

const Modal = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll');
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <h1>Este é um modal</h1>
    </div>
  );
};

export default Modal;
