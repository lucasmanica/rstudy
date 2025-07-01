import React from 'react';

function FormInputs({ id, label, type, setValue, ...props }) {
  return (
    <>
      <label htmlFor={id} name={label} id={label}>
        {label}
      </label>
      <input
        id={id}
        {...props}
        name={label}
        type={type}
        onChange={({ target }) => setValue(target.value)}
      ></input>
    </>
  );
}

export default FormInputs;
