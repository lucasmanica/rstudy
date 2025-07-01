import React from 'react';

function FormCheckbox({ options, value, setValue }) {
  function handleFunction({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((opt) => opt !== target.value));
    }
  }
  return (
    <div>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="checkbox"
              checked={value.includes(option)}
              value={option}
              onChange={handleFunction}
            ></input>
            {option}
          </label>
        );
      })}
    </div>
  );
}

export default FormCheckbox;
