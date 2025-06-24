import React from 'react';

function FormInputChallenge() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });
  // nome, email, senha, cep, rua, numero, bairro, cidade e estado
  // fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(form)
  // })
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/usuario',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        },
      );
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.log(e, 'error');
    } finally {
    }
  }
  function handleChange({ target }) {
    const { id, value } = target;
    console.log({ ...form });
    setForm({ ...form, [id]: value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <section>
        {Object.keys(form).map((formName) => {
          return (
            <div key={formName}>
              <label htmlFor={formName}>{formName}</label>
              <input
                type="text"
                id={formName}
                value={form[formName]}
                onChange={handleChange}
              ></input>
            </div>
          );
        })}
      </section>
      <button>Enviar</button>
    </form>
  );
}

export default FormInputChallenge;
