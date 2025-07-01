import React from 'react';
import FormInputs from './Components/FormInputs';
import FormSelect from './Components/FormSelect';
import FormRadio from './Components/FormRadio';
import FormCheckbox from './Components/FormCheckbox';
const App = () => {
  const [stateName, setStateName] = React.useState();
  const [stateEmail, setStateEmail] = React.useState();
  const [valueOption, setOption] = React.useState('');
  const [valueRadio, setRadio] = React.useState('vermelho');
  const [valueCheckboxes, setCheckboxes] = React.useState(['JavaScript']);
  const [termo, setTermo] = React.useState([]);
  return (
    <div>
      <h3>Termos</h3>
      <FormCheckbox
        options={['Concorda com os termos?']}
        value={termo}
        setValue={setTermo}
      ></FormCheckbox>
      <h3>Linguagens</h3>
      <FormCheckbox
        options={['JavaScript', 'PHP', 'Java', 'C#']}
        value={valueCheckboxes}
        setValue={setCheckboxes}
      ></FormCheckbox>
      <h3>Radio</h3>
      <FormRadio
        options={['azul', 'vermelho', 'rosa', 'laranja']}
        value={valueRadio}
        setValue={setRadio}
      ></FormRadio>
      <h3>Times</h3>
      <FormSelect
        options={['Fluminense', 'Flamengo', 'Palmeiras']}
        value={valueOption}
        setOption={setOption}
      ></FormSelect>
      <form>
        <FormInputs
          id="name"
          label="Name"
          type="text"
          value={stateName}
          setValue={setStateName}
          required
        />
        <FormInputs
          id="email"
          label="Email"
          type="email"
          value={stateEmail}
          setValue={setStateEmail}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default App;
