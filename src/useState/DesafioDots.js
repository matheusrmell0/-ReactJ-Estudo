import React from 'react';

const DesafioDots = () => {
  const [list, setList] = React.useState([]);
  const [undid, setUndo] = React.useState([]);

  const handleClick = ({ clientX, clientY }) => {
    const dotSpot = {
      clientX,
      clientY,
    };
    setList((prev) => [...prev, dotSpot]);
    setUndo([])
  };

  const handleUndo = (event) => {
    event.stopPropagation();

    if(list.length === 0)
    return

    const lastDot = list[list.length - 1];
    setList((prev) => [...prev].slice(0, -1));
    setUndo((prev) => [...prev, lastDot]);
  };

  const handleRecover = (event) => {
    event.stopPropagation();

    if(undid.length === 0)
    return

    const recoverDot = undid[undid.length -1]
    setUndo((prev) => [...prev.slice(0, -1)])
    setList((prev) => [...prev, recoverDot])
  };

  return (
    <>
      <div id="page" onClick={handleClick}>
        {list.map((item, index) => (
          <span
            key={`${item}${index}`}
            className="dot"
            style={{ left: item.clientX, top: item.clientY }}
          />
        ))}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <button onClick={handleUndo}>Limpar</button>
          <button onClick={handleRecover}>Refazer</button>
        </div>
      </div>
    </>
  );
};

export default DesafioDots;
