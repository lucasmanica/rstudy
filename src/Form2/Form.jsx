import React from 'react';
import Button from './Button';
import Input from './Input';
function Form() {
  return (
    <form>
      <Input id="email" label="Email" required></Input>
      <Input id="password" label="Senha" required type="password"></Input>
      <Button></Button>
    </form>
  );
}

export default Form;
