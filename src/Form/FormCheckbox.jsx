import React from 'react';
const myArray = ['bonito', 'feio', 'lindo', 'horroso'];
function FormCheckbox() {
  const [states, setStates] = React.useState([]);
  function handleClick({ target }) {
    if (target.checked) {
      setStates([...states, target.value]);
    } else {
      setStates(states.filter((state) => state !== target.value));
    }
  }
  return (
    <div>
      {myArray.map((arr) => {
        return (
          <label key={arr} style={{ textTransform: 'capitalize' }}>
            <input
              type="checkbox"
              value={arr}
              onChange={handleClick}
              checked={states.includes(arr)}
            ></input>
            {arr}
          </label>
        );
      })}
    </div>
  );
}

export default FormCheckbox;
