import React from 'react';
import useFetch from '../userHooks/useFetch';

const UserFetch = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response, json)
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <span>Carregando...</span>;
  if (data)
    return (
      <div>
        <ul>
          {data.map((produto) => (
            <li key={produto.id}>{produto.nome}</li>
          ))}
        </ul>
      </div>
    );
  else return null;
};

export default UserFetch;
