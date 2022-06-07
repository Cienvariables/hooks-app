import React, { useState, useCallback } from 'react';

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello!');

  // Función que va a ser memorizada
  const ChildComponent = ({ text }) => {
    console.log('rendered again!');

    return (
      <div>
        { text }
      </div>);
  }

  // Gracias a useCallback solo se renderiza cuando el valor indicado (text) cambie
  const MemoizedComponent = useCallback(<ChildComponent text={text}></ChildComponent>, [text]);

  return (
    <div>
      { count }
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setText('Hello!')}>Hello!</button>
      <button onClick={() => setText('Hola!')}>Hola!</button>
      { MemoizedComponent }
      {/* <ChildComponent text={text}></ChildComponent> */}
    </div>);
}

export default UseCallbackComponent;
