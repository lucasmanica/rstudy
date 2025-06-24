import React from 'react';
import { GlobalContext } from '../../GlobalContext';
function Limpar() {
  const { cleanData } = React.useContext(GlobalContext);
  return <button onClick={cleanData}>Limpar</button>;
}

export default Limpar;
