import React from 'react';
const App = () => {
  const [cep, setCep] = React.useState('');
  function validationCep() {
    const regex = /^\d{5}-?\d{3}$/;
    console.log(cep);
    if (cep === 0) {
      console.log(`Digite`);
    } else if (regex.test(cep)) {
      console.log(`opa cep valido`);
    } else {
      console.log(`digite um cep correto`);
    }
  }
  function handleFunction(value) {
    validationCep(value);
  }
  function setFunction({ target }) {
    setCep(target.value);
  }
  return (
    <div>
      <form>
        <input
          label="CEP"
          id="cep"
          type="text"
          value={cep}
          onBlur={handleFunction}
          onChange={setFunction}
        ></input>
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default App;
