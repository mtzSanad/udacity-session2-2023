import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    // counter = counter + 1;
    setCounter((prevCounter) => prevCounter + 1);
    // console.log(counter);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
