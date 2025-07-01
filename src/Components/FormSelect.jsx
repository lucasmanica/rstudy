import React from 'react';

function FormSelect({ options, value, setOption }) {
  return (
    <div>
      <select value={value} onChange={({ target }) => setOption(target.value)}>
        <option disabled aria-placeholder="Selecione" value="">
          Selecione
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {' '}
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormSelect;
