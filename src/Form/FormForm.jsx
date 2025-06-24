import React, { useState } from 'react';

function FormForm() {
  // const [name, setName] = React.useState('');
  // const [email, setEmail] = React.useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  function handleChange({ target }) {
    const { id, value } = target;
    console.log({ ...form });
    setForm({ ...form, [id]: value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: {form.name}</label>
      <input
        id="name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email: {form.email}</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button> Enviar </button>
    </form>
  );
}

export default FormForm;
