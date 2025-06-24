import React from 'react';

function Modal({ setModalState }) {
  return <button onClick={() => setModalState(true)}>Abrir</button>;
}

export default Modal;
