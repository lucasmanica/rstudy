import React from 'react';

function UseRefTimeout() {
  const [cart, setCart] = React.useState(0);
  const [notification, setNotification] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCart(cart + 1);
    setNotification('Item add');
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 2000);
  }
  return (
    <div>
      <p>{notification}</p>
      <button onClick={handleClick}>Add to Cart</button>
      <section>{cart}</section>
    </div>
  );
}

export default UseRefTimeout;
