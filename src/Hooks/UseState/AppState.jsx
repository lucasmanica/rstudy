import React from 'react';
import ModalButton from './ModalButton';
import Modal from './Modal';
function AppState() {
  const [modalState, setModalState] = React.useState(false);
  const [arrayFruits, setArrayFruits] = React.useState([
    'banana',
    'orange',
    'blueberry',
  ]);
  return (
    <div>
      {arrayFruits}
      <button onClick={() => setArrayFruits([...arrayFruits, 'strawberry'])}>
        Add Fruit
      </button>
      <div>{modalState ? 'Modal aberta' : 'Modal fechada'}</div>
      <Modal modalState={modalState} setModalState={setModalState}></Modal>
      <ModalButton setModalState={setModalState}></ModalButton>
    </div>
  );
}

export default AppState;
