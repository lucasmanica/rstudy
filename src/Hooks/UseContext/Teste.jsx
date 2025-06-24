import React from 'react';
import { GlobalContext } from '../../GlobalContext';
function Teste() {
  const global = React.useContext(GlobalContext);
  return <div>Teste - {global.carrinho}</div>;
}

export default Teste;
