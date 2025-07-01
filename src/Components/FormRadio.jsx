import React from 'react';

function FormRadio({ options, value, setValue }) {
  return (
    <div>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={({ target }) => setValue(target.value)}
            ></input>
            {option}
          </label>
        );
      })}
    </div>
  );
}

export default FormRadio;
