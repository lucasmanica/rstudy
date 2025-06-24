import React from 'react';

function UseRef() {
  const [comments, setComments] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();
  function handleClick() {
    setComments([...comments, input]);
    setInput('');
    inputElement.current.focus();
  }
  const marginTop = {
    marginTop: '18px',
  };
  return (
    <div>
      <section>
        <ul>
          {comments.map((comment, index) => {
            return <li key={index}>{comment}</li>;
          })}
        </ul>
        <input
          ref={inputElement}
          value={input}
          onChange={({ target }) => setInput(target.value)}
        ></input>
        <button style={marginTop} onClick={handleClick}>
          Adicionar
        </button>
      </section>
    </div>
  );
}

export default UseRef;
