import React from 'react';

function UseEffectApp() {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    document.title = 'Total ' + count;
  }, [count]);
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      UseEffectApp
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {data && <p>{data.id}</p>}
    </div>
  );
}

export default UseEffectApp;
