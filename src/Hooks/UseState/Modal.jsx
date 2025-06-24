import React from 'react';

function Modal({ modalState, setModalState }) {
  return (
    modalState && (
      <div>
        Modal{' '}
        <button onClick={() => setModalState((anterior) => !anterior)}>
          Fechar
        </button>
      </div>
    )
  );
}

export default Modal;
