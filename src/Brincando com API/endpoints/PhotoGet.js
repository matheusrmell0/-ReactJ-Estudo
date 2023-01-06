import React from 'react';

const PhotoGet = () => {
  const [id, setId] = React.useState('');
  const [foto, setFoto] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setFoto(json);
        return json;
      });
  }
  console.log(foto);
  foto.map((r) => console.log(r.src));

  return (
    <>
      <h1>PhotoGet</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={({ target }) => setId(target.value)}
        />
        <button>Puxar</button>
      </form>
      <div
        style={{
          marginTop: '10px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {foto &&
          foto.map((foto) => (
            <div sytle={{ display: 'flex'}}>
              <img style={{maxWidth: '100%'}}key={foto.id} alt={foto.title} src={foto.src}></img>
            </div>
          ))}
      </div>
    </>
  );
};

export default PhotoGet;
