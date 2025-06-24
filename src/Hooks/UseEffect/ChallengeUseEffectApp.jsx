import React from 'react';
import Product from './Product';
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
function ChallengeUseEffectApp() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const storagedData = localStorage.getItem('productData');
    if (storagedData) {
      setData(JSON.parse(storagedData));
    } else {
      console.log('tem dado não');
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem('productData', JSON.stringify(data));
  }, [data]);
  const url = 'https://ranekapi.origamid.dev/json/api/produto/';
  async function activeProduct(event) {
    s;
    setLoading(true);
    const productName = event.target.textContent.toLowerCase();
    const response = await fetch(url + productName);
    const result = await response.json();
    setData(result);
    setLoading(false);
  }
  return (
    <div>
      <h3>Preferências</h3>
      {!loading && (
        <section style={{ display: 'flex', gap: '16px' }}>
          <button onClick={activeProduct}>Notebook</button>
          <button onClick={activeProduct}>Smartphone</button>
        </section>
      )}
      {data && <Product propsData={data} />}
    </div>
  );
}

export default ChallengeUseEffectApp;
