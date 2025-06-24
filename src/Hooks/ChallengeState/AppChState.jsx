import React from 'react';
import Produto from './Produto';
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function AppChState() {
  const url = 'https://ranekapi.origamid.dev/json/api/produto/';
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const styleFlex = {
    display: 'flex',
    gap: '8px',
  };
  const styleFlexCol = {
    display: 'flex',
    'flex-direction': 'column',
    gap: '8px',
  };
  async function doFetch(type) {
    setLoading(true);
    const urlToRequest = url + type;
    const request = await fetch(urlToRequest);
    const response = await request.json();
    setLoading(false);
    if (response) {
      setData(response);
    }
  }
  return (
    <div>
      <section style={styleFlexCol}>
        <section style={styleFlex}>
          <button onClick={() => doFetch('Tablet')}>Tablet</button>
          <button onClick={() => doFetch('Smartphone')}>Smartphone</button>
          <button onClick={() => doFetch('Notebook')}>Notebook</button>
        </section>

        {!loading && data && <Produto data={data} />}
        {loading && <div>carregando...</div>}
      </section>
    </div>
  );
}

export default AppChState;
