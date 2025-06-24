import React from 'react';
import Input from './Input';
import Button from './Button';

function Form() {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input></Input>
      </p>
      <p>
        <label htmlFor="mail">Email</label>
        <Input></Input>
      </p>
      <Button />
    </form>
  );
}

export default Form;
