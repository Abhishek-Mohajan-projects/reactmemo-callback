import React, { useCallback, useState } from "react";
import Message from "./components/Message";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  const handleIncrementMessage = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log("app rendering");

  return (
    <div>
      {toggle ? "On" : "Off"}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Message count={count} handleOnIncrement={handleIncrementMessage} />
    </div>
  );
};

export default App;
