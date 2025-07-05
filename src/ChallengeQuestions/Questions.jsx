import React from 'react';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];
function Questions() {
  const [slide, setSlide] = React.useState(0);
  const [result, setResult] = React.useState(null);
  const [radioStateValue, setRadioStateValue] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  function handleChange({ target }) {
    setRadioStateValue({ ...radioStateValue, [target.id]: target.value });
  }
  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      const corrects = perguntas.filter(
        ({ id, resposta }) => radioStateValue[id] === resposta,
      );
      setSlide(slide + 1);
      setResult(corrects.length);
    }
  }
  return (
    <div>
      {perguntas.map((pergunta, indexPerguntas) => {
        if (indexPerguntas === slide)
          return (
            <section key={indexPerguntas}>
              <h3> {pergunta.pergunta} </h3>
              <section>
                {pergunta.options.map((option) => {
                  return (
                    <section key={option}>
                      <label>
                        <input
                          id={pergunta.id}
                          type="radio"
                          value={option}
                          checked={radioStateValue[pergunta.id] === option}
                          onChange={handleChange}
                        ></input>
                        {option}
                      </label>
                    </section>
                  );
                })}
                <button onClick={handleClick}>Próxima</button>
              </section>
            </section>
          );
      })}
      {result && <p>Voce acertou {result}/4</p>}
    </div>
  );
}

export default Questions;
