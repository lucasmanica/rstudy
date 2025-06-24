import React from 'react';

const set1 = new Set();
const set2 = new Set();

function UseCallback() {
  const [state, setState] = React.useState(0);
  function func1() {
    setState(state + 1);
    console.log('teste');
  }
  const func2 = React.useCallback(() => {
    setState((state) => state + 1);
    console.log('teste2');
  }, []);
  set1.add(func1);
  set2.add(func2);
  console.log(set1, 'set1');
  console.log(set2, 'set2');
  return (
    <div>
      <p>{state}</p>
      <button onClick={func1}> function 1</button>
      <button onClick={func2}> callBack 2</button>
    </div>
  );
}

export default UseCallback;
