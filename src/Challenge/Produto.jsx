import React from 'react';

function Produto({ produto }) {
  return (
    <div>
      <section
        style={{
          border: '1px solid black',
          margin: '1rem',
          padding: '1rem .5rem',
        }}
      >
        <p>{produto.nome}</p>
        <ul>
          {produto.propriedades.map((property, index) => {
            return <li key={index}>{property}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export default Produto;
