import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const ChildOne = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    count,
  }));

  const updateCount = () => {
    setCount((c) => c + 1);
    console.log(count + 1);
  };

  return <button onClick={updateCount}>Increment</button>;
});

const ChildTwo = forwardRef((props, ref) => {
  const checkCount = () => console.log("->", ref.current.count);

  return <button onClick={checkCount}>Count</button>;
});

const UseImperativeHandleComponent = () => {
  const ref = useRef();

  return (
    <div>
      <ChildOne ref={ref} />
      <ChildTwo ref={ref} />
    </div>
  );
};

export default UseImperativeHandleComponent;