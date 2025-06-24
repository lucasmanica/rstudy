import React from 'react';
import Titulo from './Titulo';
import Produto from './Produto';
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];
function ProdutoSection() {
  return (
    <div>
      <Titulo title="Produtos"></Titulo>
      {produtos.map((produto) => {
        return <Produto produto={produto} key={produto.nome} />;
      })}
    </div>
  );
}

export default ProdutoSection;
