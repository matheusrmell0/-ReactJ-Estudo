import React from 'react';
import styles from './Slide.module.css';

export const Slide = ({ slide }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const wrapper = React.useRef();

  React.useEffect(() => {
    const { width } = wrapper.current.getBoundingClientRect();
    setPosition(-(active * width));
  }, [active]);

  function prevSlide() {
    if (active > 0) setActive(active - 1);
  }
  function nextSlide() {
    if (active < slide.length - 1) setActive(active + 1);
  }

  return (
    <>
      <section className={styles.container}>
        <div
          style={{ transform: `translateX(${position}px)` }}
          ref={wrapper}
          className={styles.wrapper}
        >
          {slide.map(({ id, text }) => (
            <div className={styles.slide} key={id}>
              {text}
            </div>
          ))}
        </div>
        <nav className={styles.nav}>
          <button onClick={prevSlide}>Anterior</button>
          <button onClick={nextSlide}>Próximo</button>
        </nav>
      </section>
    </>
  );
};
