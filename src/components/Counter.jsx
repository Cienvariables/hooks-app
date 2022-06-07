import React, { useState } from 'react';

const UseStateComponent = () => {
  //se define la variable count y su setter setCount utilizando destructuracion de Arrays
  let [count, setCount] = useState(0);// 0 es el valor inicial del state

  return (
    <div>
      Count: { count }
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => count = count + 2}>+2</button> {/* actualiza el count, pero no re-renderiza */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>);
}

export default UseStateComponent;