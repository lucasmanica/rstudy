import React from 'react';

function count() {
  let c = 1;
  for (let i = 0; i < 100000000; i++) {
    c = (10 / 10) * i;
  }
  return c;
}

function UseMemo() {
  const [state, setState] = React.useState(0);
  const t1 = performance.now();
  const countValue = React.useMemo(() => count(), []);
  // const countValue = count();
  console.log(countValue);
  console.log(performance.now() - t1);
  return (
    <div>
      <button onClick={() => setState(state + 1)}></button>
    </div>
  );
}

export default UseMemo;
