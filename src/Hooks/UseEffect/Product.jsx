import React from 'react';

function Product({ propsData }) {
  return (
    <section>
      <h4>{propsData.id.charAt(0).toUpperCase() + propsData.id.slice(1)}</h4>
      <p>Descrição: {propsData.descricao}</p>
      <span>Valor: R$ {propsData.preco}</span>
    </section>
  );
}

export default Product;
