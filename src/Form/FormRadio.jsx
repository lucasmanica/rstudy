import React from 'react';

function FormRadio() {
  const [product, setProduct] = React.useState('');
  const [color, setColor] = React.useState('azul');
  return (
    <div>
      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          value="azul"
          checked={color === 'azul'}
          onChange={({ target }) => setColor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="rosa"
          checked={color === 'rosa'}
          onChange={({ target }) => setColor(target.value)}
        />
        Rosa
      </label>
      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          value="camiseta"
          checked={product === 'camiseta'}
          onChange={({ target }) => setProduct(target.value)}
        />
        Camiseta
      </label>
      <label>
        <input
          type="radio"
          value="calca"
          checked={product === 'calca'}
          onChange={({ target }) => setProduct(target.value)}
        />
        Calça
      </label>
      {product}
      {color}
    </div>
  );
}

export default FormRadio;
