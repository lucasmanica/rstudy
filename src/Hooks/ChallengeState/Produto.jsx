import React from 'react';
// {id, fotos, nome, preco, descricao, vendido, usuario_id}
function Produto({ data }) {
  return (
    <div>
      <section>Produto</section>
      <section>{data.nome}</section>
      <section>
        <img height="600" src={data.fotos[0].src}></img>
      </section>
      <section>Preço: R$ - {data.preco}</section>
      <section>Descrição: {data.descricao}</section>
    </div>
  );
}

export default Produto;
