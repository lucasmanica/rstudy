// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import React from 'react';
import Titulo from './Titulo';
function HomeSection() {
  return (
    <div>
      <Titulo title="Home" />
    </div>
  );
}

export default HomeSection;
