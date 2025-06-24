import React from 'react';
import { GlobalContext } from '../../GlobalContext';

const Produto = () => {
  const { product } = React.useContext(GlobalContext);
  if (product === null) return null;
  return (
    <div>
      <section>Produtos</section>
      <ul>
        {product.map((product) => {
          return <li key={product.id}>{product.nome}</li>;
        })}
      </ul>
    </div>
  );
};

export default Produto;
