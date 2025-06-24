import React from 'react';

function FormArea() {
  const [state, setState] = React.useState();
  return (
    <div>
      <textarea
        value={state}
        onChange={({ target }) => setState(target.value)}
      />
      <p>{state}</p>
    </div>
  );
}

export default FormArea;
